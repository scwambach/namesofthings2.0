"use client";
import { Button, Input } from "nes-ui-react";
import { createClient } from "@utils/supabase/client";
import { useState } from "react";

export const EmailAuthForm = ({
  onSignedIn,
}: {
  onSignedIn?: () => void;
} = {}) => {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [confirmSent, setConfirmSent] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");

    const supabase = createClient();

    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) setError(error.message);
      else onSignedIn?.();
    } else {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) {
        setError(error.message);
      } else if (!data.session) {
        setConfirmSent(true);
      }
    }

    setSubmitting(false);
  };

  if (confirmSent) {
    return (
      <div className="p-4 max-w-[220px]">
        Check your email to confirm your account before logging in.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start gap-2 p-2 min-w-[220px]">
      <Input
        type="email"
        name="email"
        label="Email"
        id="email"
        value={email}
        onChange={(e: string) => setEmail(e)}
      />
      <Input
        type="password"
        name="password"
        label="Password"
        id="password"
        value={password}
        onChange={(e: string) => setPassword(e)}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <Button
        color="success"
        disabled={submitting || !email || !password}
        onClick={handleSubmit}
      >
        {mode === "signin" ? "Log In" : "Sign Up"}
      </Button>
      <Button
        color="primary"
        onClick={() => {
          setMode(mode === "signin" ? "signup" : "signin");
          setError("");
        }}
      >
        {mode === "signin" ? "Need an account? Sign Up" : "Have an account? Log In"}
      </Button>
    </div>
  );
};
