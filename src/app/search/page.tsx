import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";
import { Form } from "./Form";

export const revalidate = 0;

async function getData() {
  const [{ data: things }, { data: items }] = await Promise.all([
    supabase
      .from("things")
      .select("title")
      .order("created_at", { ascending: false }),
    supabase.from("things").select("*").order("title"),
  ]);

  return {
    allThings: (things ?? []).map((thing) => thing.title),
    items: items ?? [],
  };
}

export default async function Home() {
  const props = await getData();

  return (
    <PageLayout allThings={props.allThings}>
      <Form items={props.items} />
    </PageLayout>
  );
}
