import { ButtonRow as ButtonRowItem } from '@components/blocks/ButtonRow'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ButtonRowItem> = {
  title: 'Components/Blocks',
  component: ButtonRowItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ButtonRowItem>

export const ButtonRow: Story = {
  args: {
    heading: 'Button Row',
    level: 2,
    subheading: 'A row of buttons',
    items: [
      {
        _key: '1',
        label: 'Button 1',
        href: '/button-1',
      },
      {
        _key: '2',
        label: 'Button 2',
        theme: 'secondary',
        href: '/button-2',
      },
      {
        _key: '3',
        label: 'Button 3',
        theme: 'tertiary',
        href: '/button-3',
      },
    ],
  },
}
