import { RichText as RichTextItem } from '@components/blocks/RichText'
import type { Meta, StoryObj } from '@storybook/react'

const markdownCopy = (image: boolean) => ` # Title: Placeholder Markdown Text

## Introduction

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus sapien quis sem consequat, eget consectetur justo interdum. Fusce nec velit sit amet ante consequat malesuada. Nullam lacinia velit ut purus tincidunt, ac suscipit nunc pharetra. Nam eu leo ut arcu consequat finibus nec in metus. Integer nec nisi eget dui varius efficitur at et dolor. Sed ut ultrices lacus.

## Body

- **Bold Text**: Quisque eget tortor arcu. *Italic Text*: Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus sit amet dolor eget magna semper sodales.
- **Links**: [Visit OpenAI](https://openai.com) or [Google](https://google.com).
- **Lists**:
    - Lorem ipsum dolor sit amet
    - Consectetur adipiscing elit
    - Sed do eiusmod tempor incididunt
    - Ut labore et dolore magna aliqua
${image ? '- **Images**: ![Placeholder Image](https://via.placeholder.com/150x40)' : ''}

## Conclusion

In conclusion, markdown is a versatile and efficient way to format text for various purposes, including writing documents, creating web content, and collaborating on projects. Its simplicity and readability make it an excellent choice for anyone looking to structure their writing effectively. Whether you're a seasoned developer or a casual blogger, markdown can streamline your workflow and enhance the presentation of your content. Remember, practice makes perfect, so don't hesitate to experiment and customize your markdown to suit your needs.

## References

1. Lorem Ipsum: [Lorem Ipsum](https://www.lipsum.com/)
2. Markdown Guide: [Markdown Guide](https://www.markdownguide.org/)
3. GitHub Markdown Cheatsheet: [GitHub Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)`

const meta: Meta<typeof RichTextItem> = {
  title: 'Components/Blocks/RichText',
  component: RichTextItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RichTextItem>

export const SingleColumn: Story = {
  args: {
    copy: markdownCopy(true),
  },
}

export const TwoColumn: Story = {
  args: {
    copy: markdownCopy(false),
    column2Copy: markdownCopy(false),
  },
}

export const ThreeColumn: Story = {
  args: {
    copy: markdownCopy(false),
    column2Copy: markdownCopy(false),
    column3Copy: markdownCopy(false),
  },
}

export const FourColumn: Story = {
  args: {
    copy: markdownCopy(false),
    column2Copy: markdownCopy(false),
    column3Copy: markdownCopy(false),
    column4Copy: markdownCopy(false),
  },
}
