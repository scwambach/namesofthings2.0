import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { supabase } from "@utils/supabaseClient";

export interface FormDataProps {
  title: string;
  description?: string;
  typeOfName: string;
  genre?: string;
  user: string;
}

export async function POST(request: NextRequest) {
  const formData: FormDataProps = await request.json();

  const { error } = await supabase.from("things").insert({
    source_id: randomUUID(),
    title: formData.title,
    description: formData.description || null,
    type_of_name: formData.typeOfName,
    genre: formData.genre || null,
    user: formData.user,
  });

  if (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      body: {
        message: "There was an error saving your thing.",
      },
    });
  }

  return NextResponse.json({
    status: 200,
    body: {
      message: "Saved!",
    },
  });
}
