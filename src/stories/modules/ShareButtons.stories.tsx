import { ShareButtons as ShareButtonsItem } from '@components/modules/ShareButtons'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ShareButtonsItem> = {
  title: 'Components/Modules',
  component: ShareButtonsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ShareButtonsItem>

export const ShareButtons: Story = {
  args: {
    title: 'In ornare mollis nisl, quis.',
    slug: 'in-ornare-mollis-nisl-quis',
  },
}
