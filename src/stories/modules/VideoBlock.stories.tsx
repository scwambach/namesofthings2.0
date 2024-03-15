import { VideoBlock as VideoBlockItem } from '@components/modules/VideoBlock'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof VideoBlockItem> = {
  title: 'Components/Modules',
  component: VideoBlockItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof VideoBlockItem>

export const VideoBlock: Story = {
  args: {
    url: 'https://www.youtube.com/embed/7e90gBu4pas',
    title: 'Official Music Video on YouTube',
    copy: 'Watch the official music video for "Nam felis" on YouTube.',
    poster: {
      alt: 'Nam felis',
      query: 'corporate',
      src: 'https://source.unsplash.com/random/800x400?corporate%201',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}
