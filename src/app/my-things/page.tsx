import { Form } from "@components/Form";
import { client } from "@utils/sanityClient";
import { PageLayout } from "@components/PageLayout";
import { List } from "./List";

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
    "allThings": *[_type == "nameOfThing"] | order(_createdAt desc)[].title,
  }`);
  return pageData;
}

export default async function MyThings() {
  const props = await getData();

  return (
    <PageLayout allThings={props.allThings}>
      <List />
    </PageLayout>
  );
}
