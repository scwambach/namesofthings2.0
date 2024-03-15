import { Stat as StatItem } from '@components/modules/Stat'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof StatItem> = {
  title: 'Components/Modules/Stat',
  component: StatItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof StatItem>

export const Primary: Story = {
  args: {
    value: 100,
    icon: 'Rocket',
    title: 'New Users',
    numberSuffix: 'k',
    theme: 'primary',
    tags: ['+10%', 'from last month'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Secondary: Story = {
  args: {
    value: 293487209,
    type: 'currency',
    maxValue: 570,
    icon: 'Backpack',
    title: 'Money stuff',
    theme: 'secondary',
    tags: ['+10%', 'from last month'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const Tertiary: Story = {
  args: {
    value: 84.34,
    type: 'percentage',
    icon: 'Knife',
    title: 'Something Else',
    theme: 'tertiary',
    tags: ['+10%', 'from last month'],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '400px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
