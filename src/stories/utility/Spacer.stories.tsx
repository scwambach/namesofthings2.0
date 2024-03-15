import { Spacer as SpacerItem } from '@components/utility/Spacer'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SpacerItem> = {
  title: 'Components/Utility/Spacer',
  component: SpacerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpacerItem>

export const Default: Story = {
  args: {
    size: 4,
  },
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            background: 'blue',
            height: '40px',
          }}
        />
        <Story />
        <div
          style={{
            background: 'blue',
            height: '40px',
          }}
        />
      </div>
    ),
  ],
}

export const Divider: Story = {
  args: {
    size: 4,
    divide: true,
  },
  decorators: [
    (Story) => (
      <div>
        <div
          style={{
            background: 'blue',
            height: '40px',
          }}
        />
        <Story />
        <div
          style={{
            background: 'blue',
            height: '40px',
          }}
        />
      </div>
    ),
  ],
}
