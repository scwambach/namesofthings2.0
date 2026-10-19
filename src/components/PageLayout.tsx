import "@styles/globals.css";
import { Header } from "@components/Header";
import { ReactNode } from "react";
import { Background } from "./Background";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export const PageLayout = ({
  children,
  allThings,
}: {
  children: ReactNode;
  allThings?: string[];
}) => {
  return (
    <main className="flex flex-col min-h-screen justify-between">
      {allThings && <Background allThings={allThings} />}
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </main>
  );
};
