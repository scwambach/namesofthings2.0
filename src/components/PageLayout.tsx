import "@styles/globals.css";
import { Header } from "@components/Header";
import { ReactNode } from "react";
import { Press_Start_2P } from "next/font/google";

const font = Press_Start_2P({ weight: "400", subsets: ["latin"] });

export const PageLayout = ({
  children,
  allThings,
}: {
  children: ReactNode;
  allThings: string[];
}) => {
  return (
    <main className={font.className}>
      <div
        className="left-1/2 opacity-[0.04] pointer-events-none fixed top-1/2  z-[-1] w-screen origin-top scale-150"
        style={{
          transform: "rotate(-10deg) translate(-50%, -50%) scale(3)",
        }}
      >
        {allThings.map((thing) => (
          <span
            style={{
              fontSize: "1rem",
              lineHeight: "1",
            }}
            key={thing}
          >
            {thing},{" "}
          </span>
        ))}
      </div>
      <Header />
      {children}
    </main>
  );
};
