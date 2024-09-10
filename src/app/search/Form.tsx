"use client";
import { List } from "@components/List";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { ThingProps } from "@utils/types";
import { Input } from "nes-ui-react";
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
    <div className="max-w-[600px] w-full mx-auto px-4">
      <div className="w-full min-h-screen">
        <div className="relative">
          <Input
            type="search"
            label="Search"
            className="pl-[40px]"
            onChange={(e) => {
              setQuery(e);
            }}
          />
          <MagnifyingGlass
            size={24}
            weight="bold"
            className="absolute bottom-[5px] left-[7px] border-r-black border-r-2 pr-[4px]"
          />
        </div>
        {searchActive ? (
          <List items={filteredItems} />
        ) : (
          <div className="flex justify-center gap-4 text-center flex-col pl-4 w-full mx-auto py-10">
            <h1
              style={{
                fontSize: "4vw",
              }}
            >
              Type something, alright!?
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
