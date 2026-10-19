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
      <p className="max-w-[640px] mx-auto px-5 sm:px-10 pt-12 text-[12px] leading-relaxed font-medium text-center">
        Every entry in this catalogue began as a joke, a dare, or an
        accident &mdash; submitted by someone who needed, urgently, to call
        something <em>something</em>. What follows is the instrument by
        which that happens.
      </p>
      <Form {...props} typesOfThings={orderOfTypes} />
    </PageLayout>
  );
}
