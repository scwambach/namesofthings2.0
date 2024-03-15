import { IconSelector as IconSelectorItem } from '@components/utility/IconSelector'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconSelectorItem> = {
  title: 'Components/Utility',
  component: IconSelectorItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IconSelectorItem>

export const IconSelector: Story = {
  args: {
    color: 'black',
    size: 124,
    icon: 'RocketLaunch',
    mirrored: false,
    weight: 'regular',
  },
}
