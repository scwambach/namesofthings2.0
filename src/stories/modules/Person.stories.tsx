import { Person as PersonItem } from '@components/modules/Person'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PersonItem> = {
  title: 'Components/Modules',
  component: PersonItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PersonItem>

export const Person: Story = {
  args: {
    firstName: 'John',
    lastName: 'Doe',
    title: 'CEO',
    image: {
      query: 'face',
      alt: 'John Doe',
    },
    socials: [
      {
        href: 'https://www.linkedin.com/',
        screenReader: 'LinkedIn',
        icon: 'LinkedinLogo',
      },
      {
        href: 'https://www.twitter.com/',
        screenReader: 'Twitter',
        icon: 'TwitterLogo',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
