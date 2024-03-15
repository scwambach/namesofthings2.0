import { Videos as VideosItem } from '@components/blocks/Videos'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof VideosItem> = {
  title: 'Components/Blocks',
  component: VideosItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VideosItem>

export const Videos: Story = {
  args: {
    heading: 'Videos',
    subheading: 'Check out our latest videos',
    items: [
      {
        url: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Official Music Video on YouTube',
        copy: 'Watch the official music video for "Nam felis" on YouTube.',
        poster: {
          alt: 'Nam felis',
          query: 'corporate',
          src: 'https://source.unsplash.com/random/800x400?corporate%201',
        },
      },
      {
        url: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Official Music Video on YouTube',
        copy: 'Watch the official music video for "Nam felis" on YouTube.',
        poster: {
          alt: 'Nam felis',
          query: 'corporate',
          src: 'https://source.unsplash.com/random/800x400?corporate%202',
        },
      },
      {
        url: 'https://www.youtube.com/embed/7e90gBu4pas',
        title: 'Official Music Video on YouTube',
        copy: 'Watch the official music video for "Nam felis" on YouTube.',
        poster: {
          alt: 'Nam felis',
          query: 'corporate',
          src: 'https://source.unsplash.com/random/800x400?corporate%203',
        },
      },
    ],
  },
}
