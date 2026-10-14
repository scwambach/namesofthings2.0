import type { User } from "@supabase/supabase-js";

// Keeps the stored shape identical to what NextAuth used to write
// ({name, email, image}), so existing rows and new rows stay consistent.
export const normalizeAuthUser = (user: User) => ({
  name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null,
  email: user.email ?? null,
  image: user.user_metadata?.avatar_url ?? user.user_metadata?.picture ?? null,
});
