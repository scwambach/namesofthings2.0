import "@styles/globals.css";
import { Header } from "@components/Header";
import { ReactNode } from "react";
import { Press_Start_2P } from "next/font/google";
import { Background } from "./Background";
import { Footer } from "./Footer";

const font = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const PageLayout = ({
  children,
  allThings,
}: {
  children: ReactNode;
  allThings?: string[];
}) => {
  return (
    <main
      className={`${font.className} flex flex-col min-h-screen justify-between`}
    >
      {allThings && <Background allThings={allThings} />}
      <Header />
      {children}
      <Footer />
    </main>
  );
};
