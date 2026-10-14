import { createClient } from "@utils/supabase/server";
import { AuthProvider } from "@components/AuthProvider";
import { Viewport } from "next";

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
    <html lang="en" className="nes-ui">
      <head>
        <title>Names of Things</title>
        <meta name="description" content="A place where you can name stuff." />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <AuthProvider initialUser={user}>
          <>{children}</>
        </AuthProvider>
      </body>
    </html>
  );
}
