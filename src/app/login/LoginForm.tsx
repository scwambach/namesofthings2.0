"use client";
import { EmailAuthForm } from "@components/EmailAuthForm";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[400px] mx-auto py-10">
      <EmailAuthForm onSignedIn={() => router.push("/")} />
    </div>
  );
};
