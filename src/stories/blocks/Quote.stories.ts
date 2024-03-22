import { Quote as QuoteItem } from '@components/blocks/Quote'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof QuoteItem> = {
  title: 'Components/Blocks/Quote',
  component: QuoteItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof QuoteItem>

export const Blue: Story = {
  args: {
    bgColor: 'blue',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Red: Story = {
  args: {
    bgColor: 'red',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const Black: Story = {
  args: {
    bgColor: 'black',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const White: Story = {
  args: {
    bgColor: 'white',
    cite: 'John Doe',
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}

export const PersonQuote: Story = {
  args: {
    bgColor: 'black',
    cite: 'John Doe',
    person: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Developer',
      company: 'ABC Inc',
      image: {
        query: 'person',
        alt: 'John Doe',
      },
    },
    quote:
      'Aenean faucibus elit eget metus faucibus accumsan. Vestibulum non consequat est. Aenean malesuada sagittis nec ac nulla.',
    testId: 'quote-test',
  },
}
