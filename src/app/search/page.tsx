import { client } from "@utils/sanityClient";
import { PageLayout } from "@components/PageLayout";
import { Form } from "./Form";
import { thingObject } from "queries";

export const revalidate = 0;

async function getData() {
  const pageData = await client.fetch(`{
    "genres": *[_type == "genre"] | order(title asc) {
      _id,
      title
    },
    "allThings": *[_type == "nameOfThing"] | order(_createdAt desc)[].title,
    "items": *[_type == "nameOfThing"] | order(title asc) {
      ${thingObject}
    }
  }`);
  return pageData;
}

export default async function Home() {
  const props = await getData();

  return (
    <PageLayout allThings={props.allThings}>
      <Form items={props.items} />
    </PageLayout>
  );
}
