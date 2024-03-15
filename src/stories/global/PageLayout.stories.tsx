import { Banner } from '@components/blocks'
import { PageLayout as PageLayoutItem } from '@components/global/PageLayout'
import type { Meta, StoryObj } from '@storybook/react'
import { ContactInfoProps, GlobalProps } from '@utils/types'

const meta: Meta<typeof PageLayoutItem> = {
  title: 'Components/Global',
  component: PageLayoutItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PageLayoutItem>

export const PageLayout: Story = {
  args: {
    children: <Banner heading="Placeholder content" />,
    global: {
      siteTitle: 'Next.js Starter Boilerplate',
      siteDescription: 'A starter boilerplate for Next.js',
      favicon: '/favicon.ico',
      contact: {
        phone: '555-555-5555',
        email: 'email@email.com',
        address: {
          street: '1234 Street',
          city: 'City',
          state: 'ST',
          zip: '12345',
        },
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
        ],
        socials: [
          {
            icon: 'FacebookLogo',
            href: 'https://facebook.com',
            screenReader: 'Facebook',
          },
        ],
      } as ContactInfoProps,
      navigation: [
        {
          label: 'Home',
          href: '/',
          type: 'link',
        },
        {
          label: 'About',
          type: 'button',
          href: '/about',
          subnav: [
            {
              copy: 'Our Team',
              href: '/about/team',
            },
            {
              copy: 'Our Mission',
              href: '/about/mission',
            },
          ],
        },
        {
          label: 'Blog',
          href: '/blog',
          type: 'link',
        },
      ] as GlobalProps['navigation'],
    },
  },
}
