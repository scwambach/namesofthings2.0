import { Tag as TagItem } from '@components/modules/Tag'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TagItem> = {
  title: 'Components/Modules/Tag',
  component: TagItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TagItem>

export const Primary: Story = {
  args: {
    label: 'Primary',
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    theme: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    label: 'Tertiary',
    theme: 'tertiary',
  },
}
