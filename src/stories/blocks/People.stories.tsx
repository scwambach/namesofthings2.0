import { People as PeopleItem } from '@components/blocks/People'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PeopleItem> = {
  title: 'Components/Blocks',
  component: PeopleItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PeopleItem>

export const People: Story = {
  args: {
    columns: 4,
    gap: 'xs',
    items: [
      {
        firstName: 'John',
        lastName: 'Doe',
        title: 'CEO',
        image: {
          query: 'face 1',
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        title: 'CTO',
        image: {
          query: 'face 2',
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'John',
        lastName: 'Smith',
        title: 'CFO',
        image: {
          query: 'face 3',
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        title: 'COO',
        image: {
          query: 'face 4',
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'John',
        lastName: 'Johnson',
        title: 'CIO',
        image: {
          query: 'face 5',
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
      {
        firstName: 'Jane',
        lastName: 'Johnson',
        title: 'CMO',
        image: {
          query: 'face 6',
          alt: 'Placeholder image',
        },
        socials: [
          {
            href: 'https://www.linkedin.com',
            screenReader: 'LinkedIn',
            icon: 'LinkedinLogo',
          },
          {
            href: 'https://www.twitter.com',
            screenReader: 'Twitter',
            icon: 'TwitterLogo',
          },
        ],
      },
    ],
  },
}
