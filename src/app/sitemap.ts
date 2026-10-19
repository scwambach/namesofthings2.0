import { MetadataRoute } from "next";

const siteUrl = "https://namesofthings.com";
const types = ["Band", "Album", "Song", "Podcast", "Horse", "Other"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/search`,
      changeFrequency: "weekly",
      priority: 0.5,
    },
    ...types.map((type) => ({
      url: `${siteUrl}/list?typeOfName=${type}`,
      changeFrequency: "daily" as const,
      priority: 0.8,
    })),
  ];
}
