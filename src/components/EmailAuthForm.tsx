"use client";
import { createClient } from "@utils/supabase/client";
import { accents } from "@styles/palette";
import { useState } from "react";

const underlineInputClass =
  "w-full box-border border-0 border-b-[1.5px] border-black bg-transparent py-2 px-0.5 text-lg font-semibold outline-none";
const labelClass = "text-xs tracking-wider uppercase font-semibold mb-2.5 block text-[#555555]";

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
      <div className="border border-black p-8 max-w-[360px] text-center">
        Check your email to confirm your account before logging in.
      </div>
    );
  }

  return (
    <div className="border border-black max-w-[400px] w-full">
      <div className="px-8 py-6 border-b border-black text-center">
        <div
          className="text-xs tracking-wider uppercase font-semibold mb-2"
          style={{ color: accents[0] }}
        >
          {mode === "signin" ? "Entry Form No. 048" : "Entry Form No. 049"}
        </div>
        <div className="text-[13px] leading-relaxed">
          {mode === "signin" ? "Log In" : "Sign Up"}
        </div>
      </div>

      <div className="p-8 flex flex-col gap-6">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            className={underlineInputClass}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className={labelClass}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            className={underlineInputClass}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <span className="text-sm" style={{ color: accents[0] }}>
            {error}
          </span>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-black flex-wrap gap-4">
          <button
            type="button"
            className="text-xs tracking-wider uppercase font-semibold underline text-[#555555]"
            onClick={() => {
              setMode(mode === "signin" ? "signup" : "signin");
              setError("");
            }}
          >
            {mode === "signin" ? "Need an account? Sign Up" : "Have an account? Log In"}
          </button>
          <button
            type="button"
            disabled={submitting || !email || !password}
            className="px-8 py-3 border-[1.5px] border-black bg-black text-white text-[13px] tracking-widest uppercase font-bold disabled:opacity-40"
            onClick={handleSubmit}
          >
            {mode === "signin" ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};
