import { getServerSession } from "next-auth";
import SessionProvider from "@components/SessionProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en" className="nes-ui">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
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
