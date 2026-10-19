import { NextRequest, NextResponse } from "next/server";
import { createClient as createSupabaseServerClient } from "@utils/supabase/server";
import { supabase } from "@utils/supabaseClient";

export async function POST(request: NextRequest) {
  const authClient = createSupabaseServerClient();
  const {
    data: { user },
  } = await authClient.auth.getUser();

  if (!user) {
    return NextResponse.json({ status: 401, body: { message: "Not signed in." } });
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ status: 400, body: { message: "No file provided." } });
  }

  const extension = file.name.split(".").pop() || "jpg";
  const path = `${user.id}/${Date.now()}.${extension}`;

  const { error: uploadError } = await supabase.storage
    .from("avatars")
    .upload(path, file, {
      contentType: file.type,
      upsert: true,
    });

  if (uploadError) {
    console.error("Avatar upload error:", uploadError);
    return NextResponse.json({
      status: 500,
      body: { message: "Failed to upload avatar." },
    });
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(path);

  return NextResponse.json({ status: 200, body: { url: publicUrl } });
}
