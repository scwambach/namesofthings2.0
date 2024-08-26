import { defineField } from "sanity";

export const genre = {
  name: "genre",
  title: "Genre",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
};
