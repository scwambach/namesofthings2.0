import { Badge as BadgeItem } from '@components/modules/Badge'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BadgeItem> = {
  title: 'Components/Modules/Badge',
  component: BadgeItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BadgeItem>

export const Default: Story = {
  args: {
    number: 5,
  },
}

export const WithColor: Story = {
  args: {
    number: 5,
    color: 'blue',
  },
}

export const WithMaxNumber: Story = {
  args: {
    number: 123897,
    maxNumber: 100,
  },
}
