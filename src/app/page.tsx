import { Form } from "@components/Form";
import { client } from "@utils/sanityClient";
import { PageLayout } from "@components/PageLayout";

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

export default async function Home() {
  const props = await getData();

  const orderOfTypes = ["Band", "Album", "Song", "Podcast", "Horse"];

  return (
    <PageLayout allThings={props.allThings}>
      <Form {...props} typesOfThings={orderOfTypes} />
    </PageLayout>
  );
}
