import "./globals.css";

import { getServerSession } from "next-auth";
import { Press_Start_2P } from "next/font/google";
import SessionProvider from "@components/SessionProvider";
import { Header } from "@components/Header";

const font = Press_Start_2P({ weight: "400", subsets: ["latin"] });

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
          <main className={font.className}>
            <Header />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
