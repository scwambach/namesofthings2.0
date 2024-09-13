import { getServerSession } from "next-auth";
import SessionProvider from "@components/SessionProvider";
import { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" className="nes-ui">
      <head>
        <title>Names of Things</title>
        <meta name="description" content="A place where you can name stuff." />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body>
        <SessionProvider session={session}>
          <>{children}</>
        </SessionProvider>
      </body>
    </html>
  );
}
