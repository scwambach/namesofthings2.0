import { NextRequest, NextResponse } from "next/server";
import { slackMessage } from "./slackMessage";

export interface FormDataProps {
  title: string;
  description?: string;
  typeOfName: string;
  genre?: string;
  user: string;
}

export async function POST(request: NextRequest) {
  const formData: FormDataProps = await request.json();

  if (formData.genre) {
    const getGenre = await fetch(
      `https://pjua03mg.api.sanity.io/v2024-03-27/data/query/production?query=*%5B_type+%3D%3D+%27genre%27+%26%26+_id+%3D%3D+%27${formData.genre}%27%5D%5B0%5D+%7B%0A++title++%0A%7D`
    );

    const genre = await getGenre.json();

    formData.genre = await genre.result.title;
  }

  try {
    const response = await fetch(process.env.NEXT_SLACK_WEBHOOK as string, {
      method: "POST",
      body: JSON.stringify(slackMessage(formData)),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return NextResponse.json({
        status: 200,
        body: {
          message: "Your message has been sent to Slack!",
        },
      });
    } else {
      return NextResponse.json({
        status: 200,
        body: {
          message: "Your message has been sent to Slack!*",
        },
      });
    }
  } catch (error) {
    console.error("Error sending message to Slack:", error);
    return NextResponse.json({
      status: 500,
      body: {
        message: "There 2222was an error sending your message to Slack.",
      },
    });
  }
}
