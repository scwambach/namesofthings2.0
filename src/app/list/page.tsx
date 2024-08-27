import { PageLayout } from "@components/PageLayout";

export default async function ListPage({
  searchParams,
}: {
  searchParams: {
    typeOfName: string;
  };
}) {
  return (
    <PageLayout>
      <h1>{searchParams.typeOfName}</h1>

      <code>
        <pre
          style={{
            fontFamily: "monospace",
            display: "block",
            padding: "50px",
            color: "#88ffbf",
            backgroundColor: "black",
            textAlign: "left",
            whiteSpace: "pre-wrap",
          }}
        >
          {JSON.stringify(searchParams, null, "    ")}
        </pre>
      </code>
    </PageLayout>
  );
}
