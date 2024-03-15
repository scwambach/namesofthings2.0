import { LogoBanner as LogoBannerItem } from '@components/blocks/LogoBanner'
import type { Meta, StoryObj } from '@storybook/react'
import Logo from '@images/logoipsum-300.svg'

const meta: Meta<typeof LogoBannerItem> = {
  title: 'Components/Blocks',
  component: LogoBannerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LogoBannerItem>

export const LogoBanner: Story = {
  args: {
    backgroundImage: {
      query: 'nature',
      alt: 'nature',
    },
    logo: Logo,
    copy: 'This is a logo banner',
  },
}
