import { client } from "@utils/sanityClient";

async function getData() {
  const pageData = await client.fetch(`*[_type == "otherName"]`);
  console.log({ pageData });
  return pageData;
}

export default async function Home() {
  const data = await getData();

  const ndjsonFormattedData = data.map((item: any) => {
    return {
      _id: item._id,
      _type: item._type,
      _createdAt: item._createdAt,
      _updatedAt: item._updatedAt,
      _rev: item._rev,
      ...item,
    };
  });

  return (
    <main>
      {ndjsonFormattedData.map((item: any) => (
        <code key={item._id}>
          <pre
            style={{
              fontFamily: "monospace",
              display: "block",
              padding: "3px 50px",
              color: "#88ffbf",
              backgroundColor: "black",
              textAlign: "left",
              whiteSpace: "pre-wrap",
            }}
          >
            {JSON.stringify(item, null, "")},
          </pre>
        </code>
      ))}
    </main>
  );
}
