import { Avatar as AvatarItem } from '@components/modules/Avatar'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AvatarItem> = {
  title: 'Components/Modules/Avatar',
  component: AvatarItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AvatarItem>

export const NoImage: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
  },
}

export const WithImage: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    image: {
      query: "a man's face",
      alt: 'John Doe',
      width: 200,
      height: 200,
    },
  },
}

export const WithBadge: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    badge: {
      number: 5,
    },
  },
}

export const WithBadgeColor: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    badge: {
      number: 5,
      color: 'blue',
    },
  },
}

export const WithBadgeLimit: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    badge: {
      number: 123897,
      maxNumber: 100,
    },
  },
}
