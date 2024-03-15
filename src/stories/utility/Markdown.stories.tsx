import { Markdown as MarkdownItem } from '@components/utility/Markdown'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MarkdownItem> = {
  title: 'Components/Utility',
  component: MarkdownItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MarkdownItem>

export const Markdown: Story = {
  args: {
    children:
      '# Markdown\n\nThis is a markdown component.\n\n- List item 1\n- List item 2\n\n**Bold**\n\n*Italic*',
  },
}
