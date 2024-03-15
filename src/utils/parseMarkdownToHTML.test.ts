import { parseMarkdownToHTML } from './parseMarkdownToHTML'

describe('parseMarkdownToHTML', () => {
  it('correctly converts basic Markdown to HTML', () => {
    const markdown = 'This is *italic* and **bold**.'
    const expectedHTML =
      '<p>This is <em>italic</em> and <strong>bold</strong>.</p>\n'
    expect(parseMarkdownToHTML(markdown)).toBe(expectedHTML)
  })

  it('correctly handles Markdown with inline formatting', () => {
    const markdown = '*Emphasis*, **strong**, `code`'
    const expectedHTML =
      '<p><em>Emphasis</em>, <strong>strong</strong>, <code>code</code></p>\n'
    expect(parseMarkdownToHTML(markdown)).toBe(expectedHTML)
  })

  it('correctly handles Markdown with block elements', () => {
    const markdown = '# Heading 1\n\n- Item 1\n- Item 2'
    const expectedHTML =
      '<h1 class="className" id="heading-1">Heading 1</h1>\n<ul>\n<li>Item 1</li>\n<li>Item 2</li>\n</ul>\n'
    expect(parseMarkdownToHTML(markdown)).toBe(expectedHTML)
  })

  it('returns empty string if input is empty', () => {
    const markdown = ''
    expect(parseMarkdownToHTML(markdown)).toBe('')
  })

  it('returns input string unchanged if it contains only whitespace', () => {
    const markdown = '   '
    expect(parseMarkdownToHTML(markdown)).toBe('')
  })
})
