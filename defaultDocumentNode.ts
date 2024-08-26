import { SanityDocument } from 'next-sanity'
import { Iframe } from 'sanity-plugin-iframe-pane'
import {
  DefaultDocumentNodeContext,
  DocumentBuilder,
  StructureBuilder,
} from 'sanity/structure'

type DefaultDocumentNodeResolver = (
  S: StructureBuilder,
  options: DefaultDocumentNodeContext
) => DocumentBuilder | null | undefined

// Customise this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument) {
  return doc?.slug?.current
    ? `${process.env.SITE_URL}/${doc.slug.current}`
    : `${process.env.SITE_URL}`
}

// Import this into the deskTool() plugin
export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `page`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => {
              const isHome = doc?.slug?.current === 'home'
              const previewUrl = `${isHome ? process.env.SITE_URL : getPreviewUrl(doc)}?preview=${process.env.PREVIEW_TOKEN}`

              return previewUrl
            },
          })
          .title('Preview'),
      ])
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => {
              const previewUrl = `/blog/${doc?.slug?.current}?preview=${process.env.PREVIEW_TOKEN}`

              return previewUrl
            },
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}
