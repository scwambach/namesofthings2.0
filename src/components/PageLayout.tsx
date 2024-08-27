import "@styles/globals.css";
import { Header } from "@components/Header";
import { ReactNode } from "react";
import { Press_Start_2P } from "next/font/google";

const font = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={font.className}>
      <Header />
      {children}
    </main>
  );
};
