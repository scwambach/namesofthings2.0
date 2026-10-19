"use client";
import Link from "next/link";
import { useState } from "react";
import { LogIn } from "./LogIn";

const types = ["Band", "Album", "Song", "Podcast", "Horse", "Other"];

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-black">
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="flex flex-col gap-[5px] p-2 -ml-2"
        >
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
          <span className="block w-6 h-0.5 bg-black" />
        </button>
        <LogIn />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          <div className="flex items-center justify-end px-5 py-3 border-b border-black">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-2xl leading-none p-2 -mr-2"
            >
              &times;
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-7 text-sm tracking-wide uppercase text-black overflow-y-auto py-10">
            {types.map((type) => (
              <Link
                key={type}
                href={`/list?typeOfName=${type}`}
                onClick={() => setOpen(false)}
              >
                {type === "Band" ? "Bands" : `${type}s`}
              </Link>
            ))}
            <Link href="/search" onClick={() => setOpen(false)}>
              Search
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
