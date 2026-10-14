import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@utils/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
    console.error("Auth callback exchangeCodeForSession error:", error);
    return NextResponse.redirect(
      `${origin}/?authError=${encodeURIComponent(error.message)}`
    );
  }

  const errorDescription = searchParams.get("error_description");
  if (errorDescription) {
    console.error("Auth callback provider error:", errorDescription);
  }
  return NextResponse.redirect(
    `${origin}/?authError=${encodeURIComponent(
      errorDescription ?? "missing code"
    )}`
  );
}
