import { createClient } from "@supabase/supabase-js";

// Server-only: uses the service role key, so this must never be imported
// from a "use client" file.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);
