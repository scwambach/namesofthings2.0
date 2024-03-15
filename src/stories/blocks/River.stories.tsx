import { River as RiverItem } from '@components/blocks/River'
import type { Meta, StoryObj } from '@storybook/react'
import image1 from '@images/nature.webp'
import image2 from '@images/nature2.webp'

const meta: Meta<typeof RiverItem> = {
  title: 'Components/Blocks/River',
  component: RiverItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RiverItem>

export const Default: Story = {
  args: {
    headingLevel: 2,
    items: [
      {
        title: 'Title 1',
        description:
          'Fusce semper ut odio eget laoreet. Fusce nec libero molestie, tempus lorem eget, finibus eros. __Aenean ut volutpat__ libero, ut vehicula quam. Donec et nisi fringilla, venenatis nulla vitae, vestibulum mauris. Suspendisse eu condimentum est, at consectetur ipsum. Etiam hendrerit.',
        image: {
          query: 'nature',
          alt: 'Alt',
        },
        links: [
          {
            label: 'Label',
            href: 'https://example.com',
          },
        ],
      },
      {
        title: 'Title 2',
        description:
          'Pellentesque dignissim viverra turpis at sodales. Integer vitae ligula fermentum, sodales nunc in, tincidunt felis. Nullam non posuere metus. Vestibulum in sapien urna. Praesent laoreet fermentum rutrum. Donec libero turpis, scelerisque eget fringilla ac, efficitur quis tortor. Maecenas interdum tempor mi, ac mattis mi ornare ut. Aenean vulputate consequat velit, vitae facilisis nisl luctus id.',
        image: {
          query: 'nature 2',
          alt: 'Alt',
        },
        links: [
          {
            label: 'Label',
            href: 'https://example.com',
          },
        ],
      },
    ],
  },
}
export const Videos: Story = {
  args: {
    headingLevel: 2,
    items: [
      {
        title: 'Title 1',
        description:
          'Fusce semper ut odio eget laoreet. Fusce nec libero molestie, tempus lorem eget, finibus eros. __Aenean ut volutpat__ libero, ut vehicula quam. Donec et nisi fringilla, venenatis nulla vitae, vestibulum mauris. Suspendisse eu condimentum est, at consectetur ipsum. Etiam hendrerit.',
        image: {
          src: image1.src,
          alt: 'Alt',
        },
        video: {
          url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        },
        links: [
          {
            label: 'Label',
            href: 'https://example.com',
          },
        ],
      },
      {
        title: 'Title 2',
        description:
          'Pellentesque dignissim viverra turpis at sodales. Integer vitae ligula fermentum, sodales nunc in, tincidunt felis. Nullam non posuere metus. Vestibulum in sapien urna. Praesent laoreet fermentum rutrum. Donec libero turpis, scelerisque eget fringilla ac, efficitur quis tortor. Maecenas interdum tempor mi, ac mattis mi ornare ut. Aenean vulputate consequat velit, vitae facilisis nisl luctus id.',
        image: {
          src: image2.src,
          alt: 'Alt',
        },
        video: {
          url: 'https://www.youtube.com/watch?v=9bZkp7q19f0',
        },
        links: [
          {
            label: 'Label',
            href: 'https://example.com',
          },
        ],
      },
    ],
  },
}
