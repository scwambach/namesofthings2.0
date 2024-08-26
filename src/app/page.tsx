import { Login } from "@components/Login";
import { client } from "@utils/sanityClient";

async function getData() {
  const pageData = await client.fetch(`{
    "genres": *[_type == "genre"]
  }`);
  return pageData;
}

export default async function Home() {
  const props = await getData();

  return (
    <>
      <Login {...props} />
    </>
  );
}
