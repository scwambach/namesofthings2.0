import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { media } from "sanity-plugin-media";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
// import {
//   Compass,
//   Globe,
//   Pencil,
//   Scroll,
//   Ticket,
//   UsersThree,
// } from "@phosphor-icons/react";
// import { defaultDocumentNode } from "./defaultDocumentNode";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      // defaultDocumentNode,
      //   structure: (S) =>
      //     S.list()
      //       .title('Content')
      //       .items([
      //         S.listItem()
      //           .title('Pages')
      //           .child(S.documentTypeList('page').title('Pages'))
      //           .icon(Scroll),
      //         S.listItem()
      //           .title('Posts')
      //           .child(S.documentTypeList('post').title('Posts'))
      //           .icon(Pencil),
      //         S.listItem()
      //           .title('People')
      //           .child(S.documentTypeList('person').title('People'))
      //           .icon(UsersThree),
      //         S.listItem()
      //           .title('Events')
      //           .child(S.documentTypeList('event').title('Events'))
      //           .icon(Ticket),
      //         S.listItem()
      //           .title('Global Info')
      //           .child(
      //             S.document()
      //               .schemaType('globalSettings')
      //               .documentId('globalSettings')
      //           )
      //           .icon(Globe),
      //         S.listItem()
      //           .title('Navigation')
      //           .child(S.documentTypeList('navigation').title('Navigation'))
      //           .icon(Compass),
      //       ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
});
