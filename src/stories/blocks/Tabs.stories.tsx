import { Tabs as TabsItem } from '@components/blocks/Tabs'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TabsItem> = {
  title: 'Components/Blocks/Tabs',
  component: TabsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TabsItem>

export const Primary: Story = {
  args: {
    items: [
      {
        label: 'Tab 1',
        content: 'This is tab 1',
      },
      {
        label: 'Tab 2',
        content: 'This is tab 2',
      },
      {
        label: 'Tab 3',
        content: 'This is tab 3',
      },
    ],
  },
}

export const Secondary: Story = {
  args: {
    items: [
      {
        label: 'Tab 1',
        content: 'This is tab 1',
      },
      {
        label: 'Tab 2',
        content: 'This is tab 2',
      },
      {
        label: 'Tab 3',
        content: 'This is tab 3',
      },
    ],
    theme: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    items: [
      {
        label: 'Tab 1',
        content: 'This is tab 1',
      },
      {
        label: 'Tab 2',
        content: 'This is tab 2',
      },
      {
        label: 'Tab 3',
        content: 'This is tab 3',
      },
    ],
    theme: 'tertiary',
  },
}
