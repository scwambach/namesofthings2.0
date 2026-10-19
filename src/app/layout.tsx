import { createClient } from "@utils/supabase/server";
import { AuthProvider } from "@components/AuthProvider";
import { pixelFont } from "@styles/fonts";
import { Metadata, Viewport } from "next";

const siteUrl = "https://namesofthings.com";
const description =
  "An ongoing catalogue of invented names for bands, albums, songs, podcasts, horses, and anything else that needs one.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Names of Things",
    template: "%s | Names of Things",
  },
  description,
  openGraph: {
    title: "Names of Things",
    description,
    url: siteUrl,
    siteName: "Names of Things",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Names of Things",
    description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <html lang="en">
      <body className={`${pixelFont.className} bg-white text-black`}>
        <AuthProvider initialUser={user}>
          <>{children}</>
        </AuthProvider>
      </body>
    </html>
  );
}
