import { Login } from "@components/Login";
import { client } from "@utils/sanityClient";
import { PageLayout } from "@components/PageLayout";
import Link from "next/link";
import { slugify } from "@utils/slugify";
import { Text } from "nes-ui-react";

const thingObject = `_id,
title,
description,
typeOfName,
"genre": genre->title`;

async function getData() {
  const pageData = await client.fetch(`{
    "genres": *[_type == "genre"] | order(title asc) {
      _id,
      title
    },
    "allThings": *[_type == "nameOfThing"] | order(_createdAt desc) {
      ${thingObject},
    }
  }`);
  return pageData;
}

export default async function Home() {
  const props = await getData();

  const allTypes: Array<string> = props.allThings.map(
    (thing: any) => thing.typeOfName
  );
  const uniqueTypes = Array.from(new Set(allTypes));

  const orderOfTypes = ["Band", "Album", "Song", "Podcast", "Horse"];
  const orderedTypes = orderOfTypes.concat(
    uniqueTypes.filter((type) => !orderOfTypes.includes(type)).sort()
  );

  const firstFiveThings = orderedTypes.slice(0, 5);
  const theRest = orderedTypes.slice(5);

  return (
    <PageLayout>
      <Login {...props} typesOfThings={orderedTypes} />

      <ul>
        {firstFiveThings.map((type: any) => (
          <li key={type}>
            <Link href={`/list?typeOfName=${type}`}>{type}</Link>
          </li>
        ))}
      </ul>
      <Text size="large">The rest of the things:</Text>
      <ul>
        {theRest.map((type: any) => (
          <li key={type}>
            <Link href={`/list?typeOfName=${type}`}>{type}</Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
