// One-off migration script: pulls all `genre` and `nameOfThing` documents
// from Sanity and writes a single SQL file (supabase/migration.sql) with
// INSERT statements matching the existing Supabase schema:
//   genres(id default, source_id not null, title not null)
//   things(id default, source_id not null, title not null, description,
//          type_of_name not null, genre, person, "user", created_at default)
//
// Run with: node scripts/export-sanity-to-supabase.mjs

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

function loadEnv(path) {
  const env = {};
  const raw = readFileSync(path, "utf8");
  for (const line of raw.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    env[key] = value; // last one wins, matches dotenv/@next/env behavior
  }
  return env;
}

const env = loadEnv(join(rootDir, ".env"));

const projectId = env.NEXT_SANITY_ID;
const dataset = env.NEXT_SANITY_DATASET;
const readToken = env.SANITY_API_READ_TOKEN;

if (!projectId || !dataset || !readToken) {
  console.error(
    "Missing NEXT_SANITY_ID / NEXT_SANITY_DATASET / SANITY_API_READ_TOKEN in .env"
  );
  process.exit(1);
}

async function sanityQuery(query) {
  const url = `https://${projectId}.api.sanity.io/v2021-06-07/data/query/${dataset}?query=${encodeURIComponent(
    query
  )}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${readToken}` },
  });
  if (!res.ok) {
    throw new Error(`Sanity query failed: ${res.status} ${await res.text()}`);
  }
  const json = await res.json();
  return json.result;
}

function sqlString(value) {
  if (value === null || value === undefined || value === "") return "NULL";
  return `'${String(value).replace(/'/g, "''")}'`;
}

console.log("Fetching genres from Sanity...");
const genres = await sanityQuery(`*[_type == "genre"]{_id, title}`);

console.log("Fetching nameOfThing documents from Sanity...");
const things = await sanityQuery(`*[_type == "nameOfThing"]{
  _id,
  _createdAt,
  title,
  description,
  person,
  typeOfName,
  user,
  "genreRef": genre._ref
}`);

console.log(`Pulled ${genres.length} genres and ${things.length} things.`);

// Sanity has genuine duplicate genre docs (same exact title, different _id).
// Keep every source_id (so nothing is lost / source_id stays a true 1:1
// link back to Sanity), but only keep one row per distinct title so the
// genres table itself stays clean.
const seenTitles = new Set();
const genreRows = [];
const titleBySanityId = new Map(); // sanity genre _id -> title (used to resolve things.genre)
for (const g of genres) {
  const title = g.title ?? "";
  titleBySanityId.set(g._id, title);
  if (seenTitles.has(title)) continue;
  seenTitles.add(title);
  genreRows.push({ source_id: g._id, title });
}

const thingRows = things.map((t) => ({
  source_id: t._id,
  created_at: t._createdAt,
  title: t.title ?? "",
  description: t.description ?? null,
  person: t.person ?? null,
  type_of_name: t.typeOfName ?? "",
  genre: t.genreRef ? titleBySanityId.get(t.genreRef) ?? null : null,
  user: t.user ?? null, // already a JSON-encoded string, stored as-is (text column)
}));

const indexSql = `-- Let (source_id) be used as a stable idempotency key for re-runs
create unique index if not exists genres_source_id_idx on genres (source_id);
create unique index if not exists things_source_id_idx on things (source_id);
`;

const genreInserts = genreRows
  .map(
    (g) =>
      `insert into genres (source_id, title) values (${sqlString(
        g.source_id
      )}, ${sqlString(g.title)}) on conflict (source_id) do nothing;`
  )
  .join("\n");

const thingInserts = thingRows
  .map(
    (t) =>
      `insert into things (source_id, title, description, type_of_name, genre, person, "user", created_at) values (${sqlString(
        t.source_id
      )}, ${sqlString(t.title)}, ${sqlString(t.description)}, ${sqlString(
        t.type_of_name
      )}, ${sqlString(t.genre)}, ${sqlString(t.person)}, ${sqlString(
        t.user
      )}, ${sqlString(t.created_at)}) on conflict (source_id) do nothing;`
  )
  .join("\n");

const outDir = join(rootDir, "supabase");
mkdirSync(outDir, { recursive: true });

const fullSql = `${indexSql}\n-- Genres (${genreRows.length})\n${genreInserts}\n\n-- Things (${thingRows.length})\n${thingInserts}\n`;

writeFileSync(join(outDir, "migration.sql"), fullSql, "utf8");
writeFileSync(
  join(outDir, "export.json"),
  JSON.stringify({ genres: genreRows, things: thingRows }, null, 2),
  "utf8"
);

console.log(
  `Wrote supabase/migration.sql (${genreRows.length} genres, ${thingRows.length} things) and supabase/export.json`
);
