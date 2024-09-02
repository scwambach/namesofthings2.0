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
    </PageLayout>
  );
}
