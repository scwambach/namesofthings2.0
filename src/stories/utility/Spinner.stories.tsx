import { Spinner as SpinnerItem } from '@components/utility/Spinner'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SpinnerItem> = {
  title: 'Components/Utility',
  component: SpinnerItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpinnerItem>

export const Spinner: Story = {
  args: {
    size: 150,
  },
}
