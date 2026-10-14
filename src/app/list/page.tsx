import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";
import { List } from "@components/List";

export const revalidate = 0;

const namedTypes = ["Band", "Album", "Song", "Podcast", "Horse"];

async function getData(typeOfName: string) {
  const isOther = typeOfName === "Other" || typeOfName === "other";

  let specificThingsQuery = supabase
    .from("things")
    .select("*")
    .order("created_at", { ascending: false });

  specificThingsQuery = isOther
    ? specificThingsQuery.not(
        "type_of_name",
        "in",
        `(${namedTypes.join(",")})`
      )
    : specificThingsQuery.eq("type_of_name", typeOfName);

  const [{ data: genres }, { data: things }, { data: specificThings }] =
    await Promise.all([
      supabase.from("genres").select("id, title").order("title"),
      supabase
        .from("things")
        .select("title")
        .order("created_at", { ascending: false }),
      specificThingsQuery,
    ]);

  return {
    genres: genres ?? [],
    allThings: (things ?? []).map((thing) => thing.title),
    specificThings: specificThings ?? [],
  };
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    typeOfName: string;
  };
}) {
  const props = await getData(searchParams.typeOfName);

  return (
    <PageLayout allThings={props.allThings}>
      <div className="w-full max-w-[800px] mx-auto px-4">
        <h1 className="list-title mt-16 mb-4">
          {searchParams.typeOfName} Names
        </h1>
        <List items={props.specificThings} withUser />
      </div>
    </PageLayout>
  );
}
