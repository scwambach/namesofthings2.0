import { Form } from "@components/Form";
import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";

export const revalidate = 604800;

async function getData() {
  const [{ data: genres }, { data: things }] = await Promise.all([
    supabase.from("genres").select("id, title").order("title"),
    supabase
      .from("things")
      .select("title")
      .order("created_at", { ascending: false }),
  ]);

  return {
    genres: genres ?? [],
    allThings: (things ?? []).map((thing) => thing.title),
  };
}

export default async function Home() {
  const props = await getData();

  const orderOfTypes = ["Band", "Album", "Song", "Podcast", "Horse"];

  return (
    <PageLayout allThings={props.allThings}>
      <Form {...props} typesOfThings={orderOfTypes} />
    </PageLayout>
  );
}
