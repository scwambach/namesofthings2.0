import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import {
  Compass,
  Globe,
  Guitar,
  Horse,
  MusicNotes,
  Pencil,
  Record,
  Scroll,
  Ticket,
  UsersThree,
} from "@phosphor-icons/react";
import { defaultDocumentNode } from "./defaultDocumentNode";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      defaultDocumentNode,
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Things with Names")
              .child(
                S.list()
                  .title("Things with Names")
                  .items([
                    S.listItem()
                      .title("All Things")
                      .child(S.documentTypeList("nameOfThing"))
                      .icon(Compass),
                    S.listItem()
                      .title("Band Names")
                      .child(
                        S.documentTypeList("nameOfThing").filter(
                          '_type == "nameOfThing" && typeOfName == "Band"'
                        )
                      )
                      .icon(Guitar),
                    S.listItem()
                      .title("Album Names")
                      .child(
                        S.documentTypeList("nameOfThing").filter(
                          '_type == "nameOfThing" && typeOfName == "Album"'
                        )
                      )
                      .icon(Record),
                    S.listItem()
                      .title("Song Names")
                      .child(
                        S.documentTypeList("nameOfThing").filter(
                          '_type == "nameOfThing" && typeOfName == "Song"'
                        )
                      )
                      .icon(MusicNotes),
                    S.listItem()
                      .title("Podcast Names")
                      .child(
                        S.documentTypeList("nameOfThing").filter(
                          '_type == "nameOfThing" && typeOfName == "Podcast"'
                        )
                      )
                      .icon(Compass),
                    S.listItem()
                      .title("Horse Names")
                      .child(
                        S.documentTypeList("nameOfThing").filter(
                          '_type == "nameOfThing" && typeOfName == "Horse"'
                        )
                      )
                      .icon(Horse),
                    S.listItem()
                      .title("All Other Things")
                      .child(
                        S.documentTypeList("nameOfThing").filter(
                          '_type == "nameOfThing" && typeOfName != "Band" && typeOfName != "Album" && typeOfName != "Song" && typeOfName != "Podcast" && typeOfName != "Horse"'
                        )
                      ),
                  ])
              )
              .icon(Scroll),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
});
