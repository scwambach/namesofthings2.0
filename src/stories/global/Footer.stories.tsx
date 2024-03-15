import { Footer as FooterItem } from '@components/global/Footer'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FooterItem> = {
  title: 'Components/Global',
  component: FooterItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FooterItem>

export const Footer: Story = {
  args: {
    copy: 'Nam molestie eu ligula et consectetur. Quisque a molestie magna. Suspendisse nunc nisi, condimentum id.',
    title: 'Next.js Starter Boilerplate',
  },
}
