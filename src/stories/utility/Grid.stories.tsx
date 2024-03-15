import { Card } from '@components/modules'
import { Grid as GridItem } from '@components/utility/Grid'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GridItem> = {
  title: 'Components/Utility',
  component: GridItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GridItem>

export const Grid: Story = {
  args: {
    columns: 4,
    gap: 'sm',
    children: (
      <>
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card title="Card 3" />
        <Card title="Card 4" />
        <Card title="Card 5" />
        <Card title="Card 6" />
        <Card title="Card 7" />
        <Card title="Card 8" />
        <Card title="Card 9" />
        <Card title="Card 10" />
        <Card title="Card 11" />
        <Card title="Card 12" />
      </>
    ),
  },
}
