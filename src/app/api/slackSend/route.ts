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
