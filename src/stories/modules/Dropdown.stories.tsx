import { Dropdown as DropdownItem } from '@components/modules/Dropdown'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DropdownItem> = {
  title: 'Components/Modules/Dropdown',
  component: DropdownItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DropdownItem>

export const Primary: Story = {
  args: {
    label: 'Dropdown',
    theme: 'primary',
    items: [
      {
        href: '#',
        copy: 'Item 1',
      },
      {
        href: '#',
        copy: 'Item 2',
      },
      {
        href: '#',
        copy: 'Item 3',
      },
    ],
  },
}

export const Secondary: Story = {
  args: {
    label: 'Dropdown',
    theme: 'secondary',
    items: [
      {
        href: '#',
        copy: 'Item 1',
      },
      {
        href: '#',
        copy: 'Item 2',
      },
      {
        href: '#',
        copy: 'Item 3',
      },
    ],
  },
}

export const Tertiary: Story = {
  args: {
    label: 'Dropdown',
    theme: 'tertiary',
    items: [
      {
        href: '#',
        copy: 'Item 1',
      },
      {
        href: '#',
        copy: 'Item 2',
      },
      {
        href: '#',
        copy: 'Item 3',
      },
    ],
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Dropdown',
    unstyled: true,
    items: [
      {
        href: '#',
        copy: 'Item 1',
      },
      {
        href: '#',
        copy: 'Item 2',
      },
      {
        href: '#',
        copy: 'Item 3',
      },
    ],
  },
}
