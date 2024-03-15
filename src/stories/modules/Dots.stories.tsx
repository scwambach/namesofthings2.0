import { Dots as DotsItem } from '@components/modules/Dots'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DotsItem> = {
  title: 'Components/Modules',
  component: DotsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DotsItem>

export const Dots: Story = {
  args: {
    count: 3,
    activeIndex: 0,
  },
}
