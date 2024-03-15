import { ImageObject } from '@components/modules'
import { Box as BoxItem } from '@components/utility/Box'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BoxItem> = {
  title: 'Components/Utility/Box',
  component: BoxItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BoxItem>

export const Default: Story = {
  args: {
    style: { position: 'relative', height: '600px', width: '1200px' },
    children: <ImageObject query="dog" isBackground alt="Dog" />,
  },
}

export const Rounded: Story = {
  args: {
    style: { position: 'relative', height: '600px', width: '1200px' },
    children: <ImageObject query="dog" isBackground alt="Dog" />,
    overflow: true,
    radius: 12,
  },
}

export const Shadow: Story = {
  args: {
    style: { position: 'relative', height: '600px', width: '1200px' },
    children: <ImageObject query="dog" isBackground alt="Dog" />,
    overflow: true,
    radius: 12,
    shadow: 4,
  },
}
