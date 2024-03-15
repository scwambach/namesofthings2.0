import { Heading as HeadingItem } from '@components/utility/Heading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof HeadingItem> = {
  title: 'Components/Utility',
  component: HeadingItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof HeadingItem>

export const Heading: Story = {
  args: {
    children: 'Heading',
    level: 1,
  },
}
