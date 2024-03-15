import { Card as CardItem } from '@components/modules/Card'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CardItem> = {
  title: 'Components/Modules/Card',
  component: CardItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CardItem>

export const Links: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      query: 'nature',
      alt: 'nature',
    },
    description: 'This is a card with a link',
    links: [
      {
        label: 'Link',
        href: '/link',
      },
      {
        label: 'Another link',
        href: '/another-link',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Clickable: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      query: 'nature',
      alt: 'nature',
    },
    href: '/clickable',
    description: 'This is a card without a link',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const NoImage: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    description: 'This is a card without an image',
    links: [
      {
        label: 'Link',
        href: '/link',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const WithTags: Story = {
  args: {
    title: 'Card',
    theme: 'primary',
    image: {
      query: 'nature',
      alt: 'nature',
    },
    description: 'This is a card with tags',
    tags: [
      {
        label: 'Tag',
      },
      {
        label: 'Another tag',
        theme: 'secondary',
      },
    ],
    links: [
      {
        label: 'Link',
        href: '/link',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const AsPost: Story = {
  args: {
    title: 'Post',
    theme: 'primary',
    image: {
      query: 'nature',
      alt: 'nature',
    },
    href: '/post',
    date: '2024-02-29',
    authors: [
      {
        firstName: 'John',
        lastName: 'Doe',
        image: {
          query: 'face 1',
          alt: 'John Doe',
        },
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        image: {
          query: 'face',
          alt: 'Jane Doe',
        },
      },
    ],
    description: 'This is a card with a date',
    tags: [
      {
        label: 'Tag',
      },
      {
        label: 'Another tag',
        theme: 'secondary',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
