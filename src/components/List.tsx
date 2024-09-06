import { ItemDetail } from "@components/ItemDetail";
import { parseUser } from "@utils/parseUser";
import { ThingProps } from "@utils/types";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

export const List = ({
  items,
  withUser,
}: {
  items: ThingProps[];
  withUser?: boolean;
}) => {
  const noItems = items.length === 0;
  return (
    <div className="flex justify-center gap-4 flex-col pl-4 w-full mx-auto py-10">
      {noItems ? (
        <h1
          className="text-center"
          style={{
            fontSize: "4vw",
          }}
        >
          Nothing here...
        </h1>
      ) : (
        <ul className="pl-10">
          {items.map((thing, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                id={thing._id}
                className={`list-decimal${!isLast ? " border-b-2 border-black pb-8 mb-8" : ""}`}
                key={thing._id}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-8 sm:items-end">
                    <p
                      className="text-blue-400 font-bold block sm:w-2/3"
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {thing.title}
                    </p>
                    <div className="sm:w-1/3 flex flex-col sm:gap-0 gap-4">
                      <Link href={`/list?typeOfName=${thing.typeOfName}`}>
                        <ItemDetail title="TYPE" value={thing.typeOfName} />
                      </Link>
                      {thing.genre && (
                        <ItemDetail title="GENRE" value={thing.genre} />
                      )}
                    </div>
                  </div>
                  {thing.description && (
                    <p className="border-l-8 border-blue-400 pl-8 my-4">
                      {thing.description}
                    </p>
                  )}
                  <div className="sm:flex sm:justify-between items-end">
                    <ItemDetail
                      title="DATE"
                      className="sm:w-2/3"
                      value={dayjs(thing.date).format("MMM D, YYYY")}
                    />
                    {withUser && (
                      <>
                        {thing.user && (
                          <div className="flex items-center gap-4 sm:w-1/3 mt-4 sm:mt-0">
                            <Image
                              src={parseUser(thing.user).image}
                              alt={parseUser(thing.user).name}
                              width={30}
                              className="rounded-full w-[30px] h-[30px]"
                              height={30}
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
      )}
    </div>
  );
};
