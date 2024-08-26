import { type SchemaTypeDefinition } from "sanity";
import { nameOfThing } from "./nameOfThing";
import { genre } from "./genre";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [nameOfThing, genre],
};
