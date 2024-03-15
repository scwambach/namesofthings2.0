import MarkdownIt from 'markdown-it'
import { headingFont } from './fonts'
import { slugify } from './slugify'

const mdParser = new MarkdownIt()

// Add custom image rendering
mdParser.use((md) => {
  md.renderer.rules.image = function (tokens, idx) {
    const token = tokens[idx]
    const src =
      token.attrs && token.attrs[0] && token.attrs[0][1]
        ? token.attrs[0][1]
        : ''
    const alt = token.content ? token.content : ''
    return `<div class="articleImage"><img src="${src}" title="${alt}" alt="${alt}"  />${
      alt ? `<div class="imageTitle">${alt}</div>` : ''
    }</div>`
  }
})

// Add custom heading rendering
mdParser.use((md) => {
  const defaultHeadingRender = md.renderer.rules.heading_open
  md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
    tokens[idx].attrJoin('class', headingFont.className)
    tokens[idx].attrJoin('id', `${slugify(tokens[idx + 1].content)}`)
    if (defaultHeadingRender) {
      return defaultHeadingRender(tokens, idx, options, env, self)
    } else {
      return self.renderToken(tokens, idx, options)
    }
  }
})

export const parseMarkdownToHTML = (markdown: string) => {
  return mdParser.render(markdown)
}
