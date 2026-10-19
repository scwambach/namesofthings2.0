"use client";
import { PageLayout } from "@components/PageLayout";
import { EmailAuthForm } from "@components/EmailAuthForm";
import { createClient } from "@utils/supabase/client";
import { Button, Text } from "nes-ui-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const signInWithGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
  };

  return (
    <PageLayout>
      <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[400px] mx-auto py-10">
        <Text size="large" className="pb-6">
          Log In
        </Text>
        <Button color="primary" onClick={signInWithGoogle}>
          Sign in with Google
        </Button>
        <EmailAuthForm onSignedIn={() => router.push("/")} />
      </div>
    </PageLayout>
  );
}
