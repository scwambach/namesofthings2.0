import { Breadcrumbs as BreadcrumbsItem } from '@components/modules/Breadcrumbs'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof BreadcrumbsItem> = {
  title: 'Components/Modules',
  component: BreadcrumbsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof BreadcrumbsItem>

export const Breadcrumbs: Story = {
  args: {
    current: 'Current',
    crumbs: [
      {
        label: 'Home',
        href: '/home',
      },
      {
        label: 'Subpage',
        href: '/subpage',
      },
    ],
  },
}
