import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";
import { List } from "@components/List";
import { Metadata } from "next";

export const revalidate = 0;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { typeOfName: string };
}): Promise<Metadata> {
  const title = `${searchParams.typeOfName} Names`;
  return {
    title,
    description: `Browse invented ${searchParams.typeOfName?.toLowerCase()} names submitted to Names of Things.`,
  };
}

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
      <div className="w-full max-w-[800px] mx-auto px-5 sm:px-10">
        <h1 className="text-lg leading-relaxed mt-16 mb-8">
          {searchParams.typeOfName} Names
        </h1>
        <List items={props.specificThings} withUser />
      </div>
    </PageLayout>
  );
}
