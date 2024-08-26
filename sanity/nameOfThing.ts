import { defineField } from "sanity";
import * as Icons from "@phosphor-icons/react";

export const nameOfThing = {
  name: "nameOfThing",
  title: "Name of Thing",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "person",
      title: "Person",
      type: "string",
    }),
    defineField({
      name: "genre",
      title: "Genre",
      type: "reference",
      to: [{ type: "genre" }],
    }),
    defineField({
      name: "typeOfName",
      title: "Type of Name",
      type: "string",
    }),
    defineField({
      name: "user",
      title: "User",
      type: "string",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "typeOfName",
    },

    prepare(selection: any) {
      const { title, subtitle } = selection;
      const media =
        subtitle === "Band"
          ? Icons.Guitar
          : subtitle === "Album"
            ? Icons.Record
            : subtitle === "Song"
              ? Icons.MusicNotes
              : subtitle === "Podcast"
                ? Icons.Microphone
                : Icons.QuestionMark;

      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
