"use client";
import { List } from "@components/List";
import { client } from "@utils/sanityClient";
import { PixelIcon } from "nes-ui-react";
import { useSession } from "next-auth/react";
import { thingObject } from "queries";
import { useEffect, useState } from "react";

export const MyList = () => {
  const [loading, setLoading] = useState(true);
  const [myThings, setMyThings] = useState<any[]>([]);
  const { data: session } = useSession();

  async function fetchData(user: string) {
    const res = await client.fetch(
      `*[_type == "nameOfThing" && user == $user] | order(_createdAt desc) {
        ${thingObject}
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
    <div className="w-full max-w-[800px] mx-auto">
      {loading ? (
        <div className="spinner">
          <PixelIcon name="pixelicon-sun" />
        </div>
      ) : (
        <List items={myThings} />
      )}
    </div>
  );
};
