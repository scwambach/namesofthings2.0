import type { User } from "@supabase/supabase-js";

// Keeps the stored shape identical to what NextAuth used to write
// ({name, email, image}), so existing rows and new rows stay consistent.
// custom_avatar_url (set via the "Change Avatar" upload) takes priority
// over whatever the OAuth provider supplied.
export const normalizeAuthUser = (user: User) => ({
  name: user.user_metadata?.full_name ?? user.user_metadata?.name ?? null,
  email: user.email ?? null,
  image:
    user.user_metadata?.custom_avatar_url ??
    user.user_metadata?.avatar_url ??
    user.user_metadata?.picture ??
    null,
});
