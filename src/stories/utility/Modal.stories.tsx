import { Modal as ModalItem } from '@components/utility/Modal'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ModalItem> = {
  title: 'Components/Utility',
  component: ModalItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ModalItem>

export const Modal: Story = {
  args: {
    triggerCopy: 'Open Modal',
    buttons: [
      {
        label: 'Submit',
        theme: 'primary',
        onClick: () => alert('Submitted'),
      },
    ],
    children: (
      <>
        <h3>Modal Content</h3>
        <p>Modal Content</p>
      </>
    ),
  },
}
