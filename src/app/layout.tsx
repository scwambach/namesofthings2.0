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
      <body>
        <SessionProvider session={session}>
          <>{children}</>
        </SessionProvider>
      </body>
    </html>
  );
}
