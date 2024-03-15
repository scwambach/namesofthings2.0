import { Carousel as CarouselItem } from '@components/blocks/Carousel'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CarouselItem> = {
  title: 'Components/Blocks',
  component: CarouselItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CarouselItem>

export const Carousel: Story = {
  args: {
    items: [
      {
        heading: 'Card 1',
        bgColor: 'blue',
        message: 'This is a card',
      },
      {
        heading: 'Card 2',
        bgColor: 'green',
        message: 'This is a card',
        links: [
          {
            label: 'Learn More',
            href: '/learn-more',
          },
          {
            label: 'Contact Us',
            href: '/contact-us',
          },
        ],
      },
      {
        heading: 'Card 3',
        bgColor: 'red',
        message: 'This is a card',
      },
      {
        heading: 'Card 4',
        backgroundImage: {
          query: 'nature 1',
          alt: 'Placeholder image',
        },
        message: 'This is a card',
      },
    ],
  },
}
