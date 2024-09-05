import { client } from "@utils/sanityClient";
import { PageLayout } from "@components/PageLayout";
import { thingObject } from "queries";
import { List } from "@components/List";

async function getData(typeOfName: string) {
  const isOther = typeOfName === "Other" || typeOfName === "other";

  const otherQuery =
    '_type == "nameOfThing" && typeOfName != "Band" && typeOfName != "Album" && typeOfName != "Song" && typeOfName != "Podcast" && typeOfName != "Horse"';

  const pageData = await client.fetch(
    `{
    "genres": *[_type == "genre"] | order(title asc) {
      _id,
      title
    },
    "allThings": *[_type == "nameOfThing"] | order(_createdAt desc)[].title,
    "specificThings": *[${isOther ? otherQuery : '_type == "nameOfThing" && typeOfName == $typeOfName'}] | order(_createdAt desc) {
      ${thingObject}
    }
}`,
    {
      typeOfName,
    }
  );
  return pageData;
}

export default async function Home({
  searchParams,
}: {
  searchParams: {
    typeOfName: string;
  };
}) {
  const props = await getData(searchParams.typeOfName);

  return (
    <PageLayout allThings={props.allThings}>
      <div className="w-full max-w-[800px] mx-auto">
        <h1 className="list-title mt-16 mb-4">
          {searchParams.typeOfName} Names
        </h1>
        <List items={props.specificThings} withUser />
      </div>
    </PageLayout>
  );
}
