import { createClient as createSupabaseServerClient } from "@utils/supabase/server";
import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";
import { List } from "@components/List";
import { ThingProps } from "@utils/types";

export const revalidate = 0;

async function getData() {
  const authClient = createSupabaseServerClient();
  const {
    data: { user },
  } = await authClient.auth.getUser();

  const [{ data: things }, { data: allMyThings }] = await Promise.all([
    supabase
      .from("things")
      .select("title")
      .order("created_at", { ascending: false }),
    user
      ? supabase
          .from("things")
          .select("*")
          .order("created_at", { ascending: false })
      : Promise.resolve({ data: [] as ThingProps[] }),
  ]);

  const myThings = user
    ? (allMyThings ?? []).filter((thing) => {
        try {
          return JSON.parse(thing.user ?? "null")?.email === user.email;
        } catch {
          return false;
        }
      })
    : [];

  return {
    allThings: (things ?? []).map((thing) => thing.title),
    myThings,
  };
}

export default async function MyThings() {
  const props = await getData();

  return (
    <PageLayout allThings={props.allThings}>
      <div className="w-full max-w-[800px] mx-auto">
        <List items={props.myThings} />
      </div>
    </PageLayout>
  );
}
