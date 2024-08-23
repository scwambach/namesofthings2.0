"use client";
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  console.log({ config });
  return <NextStudio config={config as any} />;
}
