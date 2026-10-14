import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";
import { List } from "@components/List";
import { ThingProps } from "@utils/types";

export const revalidate = 0;

async function getData() {
  const session = await getServerSession(authOptions);

  const [{ data: things }, { data: myThings }] = await Promise.all([
    supabase
      .from("things")
      .select("title")
      .order("created_at", { ascending: false }),
    session
      ? supabase
          .from("things")
          .select("*")
          .eq("user", JSON.stringify(session.user))
          .order("created_at", { ascending: false })
      : Promise.resolve({ data: [] as ThingProps[] }),
  ]);

  return {
    allThings: (things ?? []).map((thing) => thing.title),
    myThings: myThings ?? [],
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
