import dayjs from "dayjs";
import { FormDataProps } from "./route";

const today = new Date().toLocaleString();

export const slackMessage = (formData: FormDataProps) => {
  const parsedUser: {
    name: string;
    email: string;
    image: string;
  } = JSON.parse(formData.user);

  return {
    text: `Names of Things | Title: ${formData.title} |${formData.description ? ` Description: ${formData.description} |` : ""} Type: ${formData.typeOfName} |${formData.genre ? ` Genre: ${formData.genre} |` : ""} User: ${parsedUser.name} - ${parsedUser.email}
  | Submitted on ${today}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Names of Things",
        },
      },

      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Title:* ${formData.title}\n*Type:* ${formData.typeOfName}\n${
              formData.genre ? `*Genre:* ${formData.genre}` : ""
            }\n*User:* ${parsedUser.email}`,
          },
        ],
      },
      formData.description && {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Description:*\n\n> ${formData.description}`,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `From ${parsedUser.name}`,
          },
          {
            type: "image",
            image_url: parsedUser.image,
            alt_text: "images",
          },
          {
            type: "mrkdwn",
            text: `| ${dayjs(today).format("ddd MMM DD YYYY h:mm:ss A")} | `,
          },
          {
            type: "image",
            image_url:
              "https://cdn.sanity.io/images/pjua03mg/production/1ee926a8fd258da76453992037e662cd45042c88-160x160.png",
            alt_text: "images",
          },
          {
            type: "mrkdwn",
            text: "N.O.T.",
          },
        ],
      },
    ],
  };
};
