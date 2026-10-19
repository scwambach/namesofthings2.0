import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/api", "/login", "/my-things", "/auth"],
    },
    sitemap: "https://namesofthings.com/sitemap.xml",
  };
}
