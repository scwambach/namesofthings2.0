"use client";
import { client } from "@utils/sanityClient";
import dayjs from "dayjs";
import { PixelIcon } from "nes-ui-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Detail = ({ title, value }: any) => {
  return (
    <li>
      <p
        className="text-black"
        style={{
          fontSize: "0.8rem",
        }}
      >
        <strong
          className="font-bold"
          style={{
            fontSize: "0.8rem",
          }}
        >
          {title}:
        </strong>{" "}
        {value}
      </p>
    </li>
  );
};

export const List = () => {
  const [loading, setLoading] = useState(true);
  const [myThings, setMyThings] = useState<any[]>([]);
  const { data: session } = useSession();

  async function fetchData(user: string) {
    const res = await client.fetch(
      `*[_type == "nameOfThing" && user == $user] | order(_createdAt desc) {
        _id,
        typeOfName,
        "date": _createdAt,
        "genre": genre -> title,
        title,
        description,
      }`,
      {
        user,
      }
    );
    setMyThings(res);
    setLoading(false);
  }

  useEffect(() => {
    if (session) {
      fetchData(JSON.stringify(session.user));
    }
  }, []);

  return (
    <div className="flex justify-center gap-4 flex-col px-4 w-full max-w-[600px] mx-auto py-10">
      {loading ? (
        <div className="spinner">
          <PixelIcon name="pixelicon-sun" />
        </div>
      ) : (
        <ul>
          {myThings.map((thing, index) => {
            const isLast = index === myThings.length - 1;
            return (
              <li
                className={`list-decimal${!isLast ? " border-b-2 border-black pb-8 mb-8" : ""}`}
                key={thing._id}
              >
                <ul className="flex flex-col gap-2">
                  <li>
                    <p
                      className="text-blue-400 font-bold mb-4"
                      style={{
                        fontSize: "1.2rem",
                      }}
                    >
                      {thing.title}
                    </p>
                  </li>
                  <Detail
                    title="DATE"
                    value={dayjs(thing.date).format("MMM D, YYYY")}
                  />
                  <Detail title="TYPE" value={thing.typeOfName} />
                  {thing.genre && <Detail title="GENRE" value={thing.genre} />}
                  {thing.description && (
                    <p className="border-l-8 border-blue-400 pl-8 mt-4">
                      {thing.description}
                    </p>
                  )}
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
