import { Card } from '@components/modules'
import { Flex as FlexItem } from '@components/utility/Flex'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FlexItem> = {
  title: 'Components/Utility/Flex',
  component: FlexItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FlexItem>

export const Typical: Story = {
  args: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'sm',
    children: (
      <>
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
        <Card title="Card 5" />
      </>
    ),
  },
}

export const Column: Story = {
  args: {
    direction: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    gap: 'sm',
    children: (
      <>
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
        <Card title="Card 5" />
      </>
    ),
  },
}

export const Fill: Story = {
  args: {
    alignItems: 'center',
    justifyContent: 'center',
    fill: true,
    gap: 'sm',
    children: (
      <>
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
        <Card title="Card 5" />
      </>
    ),
  },
}

export const CustomLayout: Story = {
  args: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'sm',
    fill: true,
    breakpoint: 'md',
    customLayout: 'one-quarter-three-quarters',
    children: (
      <>
        <Card title="Card 1" />
        <Card title="Card 2" />
      </>
    ),
  },
}
