import { ContactBlock as ContactBlockItem } from '@components/blocks/ContactBlock'
import type { Meta, StoryObj } from '@storybook/react'
import * as Icon from '@phosphor-icons/react'

const meta: Meta<typeof ContactBlockItem> = {
  title: 'Components/Blocks',
  component: ContactBlockItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ContactBlockItem>

export const ContactBlock: Story = {
  args: {
    heading: 'Contact Us',
    level: 2,
    subheading: "We're here to help",
    marker: {
      lat: 40.7128,
      lng: -74.006,
    },
    info: {
      address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
      },
      phone: '555-555-5555',
      email: 'email@email.com',
      hours: [
        {
          days: 'Monday',
          hours: '9:00am - 5:00pm',
        },
        {
          days: 'Tuesday',
          hours: '9:00am - 5:00pm',
        },
        {
          days: 'Wednesday',
          hours: '9:00am - 5:00pm',
        },
        {
          days: 'Thursday',
          hours: '9:00am - 5:00pm',
        },
        {
          days: 'Friday',
          hours: '9:00am - 5:00pm',
        },
        {
          days: 'Saturday - Sunday',
          hours: 'Closed',
        },
      ],
      socials: [
        {
          href: 'https://www.facebook.com',
          icon: 'FacebookIcon' as keyof typeof Icon,
          screenReader: 'Facebook',
        },
        {
          href: 'https://www.twitter.com',
          icon: 'TwitterIcon' as keyof typeof Icon,
          screenReader: 'Twitter',
        },
        {
          href: 'https://www.instagram.com',
          icon: 'InstagramIcon' as keyof typeof Icon,
          screenReader: 'Instagram',
        },
      ],
    },
  },
}
