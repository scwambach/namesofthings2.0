import { supabase } from "@utils/supabaseClient";
import { PageLayout } from "@components/PageLayout";
import { LoginForm } from "./LoginForm";
import { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Log In",
  robots: { index: false, follow: false },
};

async function getData() {
  const { data: things } = await supabase
    .from("things")
    .select("title")
    .order("created_at", { ascending: false });

  return { allThings: (things ?? []).map((thing) => thing.title) };
}

export default async function LoginPage() {
  const props = await getData();

  return (
    <PageLayout allThings={props.allThings}>
      <LoginForm />
    </PageLayout>
  );
}
