import { Drawer as DrawerItem } from '@components/utility/Drawer'
import { Heading } from '@components/utility/Heading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof DrawerItem> = {
  title: 'Components/Utility/Drawer',
  component: DrawerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DrawerItem>

export const Right: Story = {
  args: {
    buttonTheme: 'primary',
    direction: 'right',
    triggerCopy: 'Open Drawer',
    children: (
      <>
        <Heading level={3}>Drawer Content</Heading>
        <p>Drawer Content</p>
      </>
    ),
  },
}

export const Left: Story = {
  args: {
    buttonTheme: 'primary',
    direction: 'left',
    triggerCopy: 'Open Drawer',
    children: (
      <>
        <Heading level={3}>Drawer Content</Heading>
        <p>Drawer Content</p>
      </>
    ),
  },
}

export const Top: Story = {
  args: {
    buttonTheme: 'primary',
    direction: 'top',
    triggerCopy: 'Open Drawer',
    children: (
      <>
        <Heading level={3}>Drawer Content</Heading>
        <p>Drawer Content</p>
      </>
    ),
  },
}

export const Bottom: Story = {
  args: {
    buttonTheme: 'primary',
    direction: 'bottom',
    triggerCopy: 'Open Drawer',
    children: (
      <>
        <Heading level={3}>Drawer Content</Heading>
        <p>Drawer Content</p>
      </>
    ),
  },
}
