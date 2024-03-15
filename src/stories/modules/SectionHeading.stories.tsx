import { SectionHeading as SectionHeadingItem } from '@components/modules/SectionHeading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SectionHeadingItem> = {
  title: 'Components/Modules',
  component: SectionHeadingItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SectionHeadingItem>

export const SectionHeading: Story = {
  args: {
    heading: 'Section Heading',
    subheading:
      'Praesent ex ligula, varius consectetur ipsum ut, molestie ultricies ligula. Praesent vitae metus pellentesque.',
    level: 2,
  },
}
