"use client";
import { List } from "@components/List";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ThingProps } from "@utils/types";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";

export const Form = ({ items }: { items: ThingProps[] }) => {
  const [query, setQuery] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [filteredItems, setFilteredItems] = useState<ThingProps[]>([]);

  const options = {
    includeScore: true,
    threshold: 0.3,
    keys: ["title"],
  };

  useEffect(() => {
    if (query) {
      const fuse = new Fuse(items, options);
      const result = fuse.search(query);

      setTimeout(() => {
        setFilteredItems(result.map((item) => item.item));
        setSearchActive(true);
      }, 300);
    } else {
      setFilteredItems([]);
      setSearchActive(false);
    }
  }, [query]);

  return (
    <div className="max-w-[800px] w-full mx-auto px-5 sm:px-10">
      <div className="w-full min-h-screen">
        <div className="relative mt-16">
          <label
            htmlFor="search"
            className="text-xs tracking-wider uppercase font-semibold mb-2.5 block"
          >
            Search
          </label>
          <MagnifyingGlass
            size={18}
            weight="bold"
            className="absolute left-0 bottom-[12px]"
          />
          <input
            id="search"
            type="search"
            className="w-full box-border border-0 border-b-[1.5px] border-black bg-transparent py-2 pl-7 text-lg font-semibold outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {searchActive ? (
          <List items={filteredItems} withUser />
        ) : (
          <div className="flex justify-center text-center flex-col w-full mx-auto py-16">
            <h1 className="text-base leading-relaxed">
              Type something, alright!?
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
