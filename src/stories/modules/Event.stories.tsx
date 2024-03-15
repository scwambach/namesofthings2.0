import { Event as EventItem } from '@components/modules/Event'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof EventItem> = {
  title: 'Components/Modules',
  component: EventItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof EventItem>

export const Event: Story = {
  args: {
    date: '2024-02-29',
    title: 'New Year',
    startTime: '14:00',
    endTime: '16:00',
    doorsOpenTime: '4:00 PM',
    location: {
      name: 'The Party Place',
      address: '123 Main St, Anytown, USA',
    },
    poster: {
      query: 'new year party 1',
      alt: 'New Year Party',
      width: 1200,
      height: 800,
    },
    links: [
      { href: '/new-year', label: 'More Info' },
      { href: '/tickets', label: 'Get Tickets' },
    ],
  },
  decorators: [
    (Story) => (
      <div className="container narrower">
        <Story />
      </div>
    ),
  ],
}
