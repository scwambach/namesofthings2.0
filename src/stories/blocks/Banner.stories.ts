import { Banner } from '@components/blocks/Banner'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Banner> = {
  title: 'Components/Blocks/Banner',
  component: Banner,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Banner>

export const Blue: Story = {
  args: {
    bgColor: 'blue',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const Red: Story = {
  args: {
    bgColor: 'red',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/learn-more',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        theme: 'secondary',
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const Black: Story = {
  args: {
    bgColor: 'black',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/learn-more',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        theme: 'tertiary',
        label: 'Learn More',
        href: '/learn-more',
      },
      {
        theme: 'tertiary',
        label: 'Contact Us',
        href: '/contact',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const White: Story = {
  args: {
    bgColor: 'white',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
        {
          label: 'About',
          href: '/learn-more',
        },
        {
          label: 'Contact',
          href: '/contact',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        theme: 'tertiary',
        label: 'Learn More',
        href: '/learn-more',
      },
      {
        theme: 'tertiary',
        label: 'Contact Us',
        href: '/contact',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
  },
}

export const WithImage: Story = {
  args: {
    bgColor: 'blue',
    crumbs: {
      current: 'Quisque iaculis tincidunt',
      items: [
        {
          label: 'Home',
          href: '/',
        },
      ],
    },
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    backgroundImage: {
      alt: 'A placeholder image',
      query: 'nature',
    },
  },
}

export const AsPost: Story = {
  args: {
    bgColor: 'blue',
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    tags: [
      {
        label: 'Tag',
        href: '/tag',
      },
      {
        label: 'Another Tag',
        href: '/another-tag',
        theme: 'secondary',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    backgroundImage: {
      alt: 'A placeholder image',
      query: 'nature',
    },
    date: '2021-01-01',
    authors: [
      {
        firstName: 'John',
        lastName: 'Doe',
        title: 'CEO',
        image: {
          alt: 'A placeholder image',
          query: 'nature',
        },
      },
    ],
  },
}

export const Contained: Story = {
  args: {
    bgColor: 'blue',
    contained: true,
    heading: 'Quisque iaculis tincidunt',
    links: [
      {
        label: 'Learn More',
        href: '/learn-more',
      },
    ],
    message:
      'Suspendisse facilisis in est vel consectetur. Integer eget malesuada dui. Maecenas vel egestas quam, a pretium mi. Curabitur sit amet.',
    headingLevel: 1,
    subheading: 'Quisque iaculis tincidunt',
    backgroundImage: {
      alt: 'A placeholder image',
      query: 'nature',
    },
  },
}

export const CalloutBox: Story = {
  args: {
    bgColor: 'black',
    boxBgColor: 'white',
    contained: true,
    containedWidth: 'narrower',
    micro: true,
    heading: 'Quisque iaculis tincidunt',
    message:
      'Donec sed velit sed erat placerat faucibus. Pellentesque placerat neque sapien, ac tristique mauris sollicitudin quis. Quisque est sem, hendrerit eu dignissim id, laoreet in neque. Nunc accumsan ligula ut vulputate viverra. Aliquam gravida nibh ut nunc tempus, ut vehicula.',
    headingLevel: 1,
  },
}
