"use client";
import { ItemDetail } from "@components/ItemDetail";
import { Avatar } from "@components/Avatar";
import { parseUser } from "@utils/parseUser";
import { ThingProps } from "@utils/types";
import { accents } from "@styles/palette";
import dayjs from "dayjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const PAGE_SIZE_OPTIONS = [25, 50, 100];

export const List = ({
  items,
  withUser,
}: {
  items: ThingProps[];
  withUser?: boolean;
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE_OPTIONS[0]);

  useEffect(() => {
    setPage(1);
  }, [items]);

  const noItems = items.length === 0;
  const showPagination = items.length > PAGE_SIZE_OPTIONS[0];
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const pagedItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="flex justify-center gap-4 flex-col pl-4 w-full mx-auto py-10">
      {noItems ? (
        <h1
          className="text-center leading-relaxed"
          style={{
            fontSize: "2vw",
          }}
        >
          Nothing here...
        </h1>
      ) : (
        <>
          {showPagination && (
            <div className="flex justify-end items-center gap-2 text-xs tracking-wider uppercase pr-4 mb-6">
              <span>Per Page:</span>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  onClick={() => {
                    setPageSize(size);
                    setPage(1);
                  }}
                  className="px-2 py-1 border border-black"
                  style={{
                    background: pageSize === size ? "#0A0A0A" : "transparent",
                    color: pageSize === size ? "#FFFFFF" : "#0A0A0A",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          )}

          <ul>
            {pagedItems.map((thing, index) => {
              const isLast = index === pagedItems.length - 1;
              const accent = accents[index % accents.length];
              return (
                <li
                  id={thing.id}
                  className={!isLast ? "border-b border-black pb-8 mb-8" : ""}
                  key={thing.id}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8 sm:items-start">
                      <p className="font-bold block sm:w-2/3 text-lg">
                        {thing.title}
                      </p>
                      <div className="sm:w-1/3 flex flex-col sm:gap-0 gap-4">
                        <Link href={`/list?typeOfName=${thing.type_of_name}`}>
                          <ItemDetail
                            title="TYPE"
                            value={thing.type_of_name}
                          />
                        </Link>
                        {thing.genre && (
                          <ItemDetail title="GENRE" value={thing.genre} />
                        )}

                        {thing.person && (
                          <ItemDetail title="PERSON" value={thing.person} />
                        )}
                      </div>
                    </div>
                    {thing.description && (
                      <p
                        className="pl-6 my-4"
                        style={{ borderLeft: `4px solid ${accent}` }}
                      >
                        {thing.description}
                      </p>
                    )}
                    <div className="sm:flex sm:justify-between items-end">
                      <ItemDetail
                        title="DATE"
                        className="sm:w-2/3"
                        value={dayjs(thing.created_at).format("MMM D, YYYY")}
                      />

                      {withUser && (
                        <>
                          {thing.user && (
                            <div className="flex items-center gap-4 sm:w-1/3 mt-4 sm:mt-0">
                              <Avatar
                                src={parseUser(thing.user).image}
                                name={parseUser(thing.user).name}
                                size={30}
                              />
                              <span>{parseUser(thing.user).name}</span>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          {showPagination && totalPages > 1 && (
            <div className="flex flex-wrap items-center justify-center gap-2 pt-8 mt-4 border-t border-black text-xs tracking-wider uppercase">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className="w-8 h-8 border border-black"
                    style={{
                      background:
                        currentPage === pageNumber ? "#0A0A0A" : "transparent",
                      color:
                        currentPage === pageNumber ? "#FFFFFF" : "#0A0A0A",
                    }}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};
