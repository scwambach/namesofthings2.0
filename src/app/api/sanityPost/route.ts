import { NextRequest, NextResponse } from "next/server";

export interface FormDataProps {
  title: string;
  description?: string;
  typeOfName: string;
  genre?: string;
  user: string;
}

export async function POST(request: NextRequest) {
  const formData: FormDataProps = await request.json();

  const item = formData.genre
    ? {
        _type: "nameOfThing",
        ...formData,
        genre: {
          _type: "reference",
          _ref: formData.genre,
        },
      }
    : {
        _type: "nameOfThing",
        ...formData,
      };

  const mutations = [
    {
      createOrReplace: item,
    },
  ];

  const post = await fetch(
    `https://${process.env.NEXT_SANITY_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_SANITY_DATASET}`,
    {
      method: "post",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.SANITY_API_WRITE_TOKEN}`,
      },
      body: JSON.stringify({ mutations }),
    }
  );

  const postResponse = await post.json();

  console.log(postResponse);

  return NextResponse.json({
    status: 200,
    body: {
      message: "Testing",
    },
  });
}
