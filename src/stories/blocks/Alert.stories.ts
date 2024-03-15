import { Alert } from '@components/blocks/Alert'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Alert> = {
  title: 'Components/Blocks/Alert',
  component: Alert,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Alert>

export const Warning: Story = {
  args: {
    componentId: 'warning',
    message: 'This is a warning message',
    type: 'warning',
  },
}

export const Error: Story = {
  args: {
    componentId: 'error',
    message: 'This is an error message',
    type: 'error',
  },
}

export const Success: Story = {
  args: {
    componentId: 'success',
    message: 'This is a success message',
    type: 'success',
  },
}

export const Info: Story = {
  args: {
    componentId: 'info',
    message: 'This is an info message',
    type: 'info',
  },
}
