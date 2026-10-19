import Link from "next/link";
import { LogIn } from "./LogIn";
import { MobileNav } from "./MobileNav";

const types = ["Band", "Album", "Song", "Podcast", "Horse", "Other"];

export const Header = () => {
  return (
    <header className="bg-white">
      <MobileNav />

      <div className="text-center px-5 sm:px-10 md:px-18 pt-10 sm:pt-14 pb-6 sm:pb-8 border-b-[5px] border-black">
        <div className="text-xs tracking-[0.22em] uppercase text-[#E8384F] font-semibold mb-4">
          An Ongoing Catalogue of Invented Names
        </div>
        <Link
          href="/"
          className="block text-[20px] sm:text-[32px] leading-relaxed sm:leading-relaxed"
        >
          Names of Things
        </Link>
      </div>

      <nav className="hidden sm:flex items-center justify-center flex-wrap gap-x-0 gap-y-2 px-5 sm:px-10 md:px-18 py-4 text-[13px] tracking-wider uppercase font-semibold border-b border-black">
        {types.map((type, index) => (
          <Link
            key={type}
            href={`/list?typeOfName=${type}`}
            className={`px-4 ${index < types.length - 1 ? "border-r border-[#D9D9D9]" : ""}`}
          >
            {type === "Band" ? "Bands" : `${type}s`}
          </Link>
        ))}
        <Link href="/search" className="px-4 border-r border-[#D9D9D9]">
          Search
        </Link>
        <LogIn />
      </nav>
    </header>
  );
};
