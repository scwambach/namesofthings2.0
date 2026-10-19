"use client";
import { EmailAuthForm } from "@components/EmailAuthForm";
import { Text } from "nes-ui-react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[400px] mx-auto py-10">
      <Text size="large" className="pb-6">
        Log In
      </Text>
      <EmailAuthForm onSignedIn={() => router.push("/")} />
    </div>
  );
};
