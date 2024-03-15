import { Button } from '@components/modules'
import { Table as TableItem } from '@components/modules/Table'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TableItem> = {
  title: 'Components/Modules',
  component: TableItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TableItem>

export const Table: Story = {
  args: {
    headingRow: ['Name', 'Age', 'Email', 'Phone', ''],
    rows: [
      {
        cells: ['John Doe', 25, 'email@email.com', '123-123-1234'],
      },
      {
        cells: ['Jane Doe', 26, 'email@email.com', '123-123-1234'],
      },
      {
        cells: ['John Smith', 27, 'email@email.com', '123-123-1234'],
      },
    ],
    controlCell: (
      <>
        <Button>Button</Button>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="container narrow">
        <Story />
      </div>
    ),
  ],
}
