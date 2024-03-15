import { CompareTables as CompareTablesItem } from '@components/blocks/CompareTables'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof CompareTablesItem> = {
  title: 'Components/Blocks/CompareTables',
  component: CompareTablesItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CompareTablesItem>

export const Primary: Story = {
  args: {
    heading: 'Compare Tables',
    level: 2,
    overallTheme: 'primary',
    subheading: 'A row of tables',
    items: [
      {
        _key: '1',
        eyebrow: 'Starter',
        heading: 'Table 1',
        subheading: 'Sed id dolor in quam.',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        theme: 'primary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '2',
        eyebrow: 'Pro',
        highlight: true,
        tag: 'Popular',
        heading: 'Table 2',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
          'Item 9',
          'Item 10',
        ],
        theme: 'secondary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '3',
        eyebrow: 'Enterprise',
        heading: 'Table 3',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
        ],
        theme: 'tertiary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
    ],
  },
}

export const Secondary: Story = {
  args: {
    heading: 'Compare Tables',
    level: 2,
    overallTheme: 'secondary',
    subheading: 'A row of tables',
    items: [
      {
        _key: '1',
        eyebrow: 'Starter',
        heading: 'Table 1',
        subheading: 'Sed id dolor in quam.',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        theme: 'primary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '2',
        eyebrow: 'Pro',
        highlight: true,
        tag: 'Popular',
        heading: 'Table 2',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
          'Item 9',
          'Item 10',
        ],
        theme: 'secondary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '3',
        eyebrow: 'Enterprise',
        heading: 'Table 3',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
        ],
        theme: 'tertiary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
    ],
  },
}

export const Tertiary: Story = {
  args: {
    heading: 'Compare Tables',
    level: 2,
    overallTheme: 'tertiary',
    subheading: 'A row of tables',
    items: [
      {
        _key: '1',
        eyebrow: 'Starter',
        heading: 'Table 1',
        subheading: 'Sed id dolor in quam.',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        theme: 'primary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '2',
        eyebrow: 'Pro',
        highlight: true,
        tag: 'Popular',
        heading: 'Table 2',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
          'Item 9',
          'Item 10',
        ],
        theme: 'secondary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '3',
        eyebrow: 'Enterprise',
        heading: 'Table 3',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
        ],
        theme: 'tertiary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
    ],
  },
}

export const Mixed: Story = {
  args: {
    heading: 'Compare Tables',
    level: 2,
    subheading: 'A row of tables',
    items: [
      {
        _key: '1',
        eyebrow: 'Starter',
        heading: 'Table 1',
        subheading: 'Sed id dolor in quam.',
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'],
        theme: 'primary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '2',
        eyebrow: 'Pro',
        highlight: true,
        tag: 'Popular',
        heading: 'Table 2',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
          'Item 8',
          'Item 9',
          'Item 10',
        ],
        theme: 'secondary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
      {
        _key: '3',
        eyebrow: 'Enterprise',
        heading: 'Table 3',
        subheading: 'Sed id dolor in quam.',
        items: [
          'Item 1',
          'Item 2',
          'Item 3',
          'Item 4',
          'Item 5',
          'Item 6',
          'Item 7',
        ],
        theme: 'tertiary',
        link: {
          type: 'link',
          label: 'Learn More',
          href: '/learn-more',
        },
      },
    ],
  },
}
