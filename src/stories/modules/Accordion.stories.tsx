import { Accordion as AccordionItem } from '@components/modules/Accordion'
import { Heading } from '@components/utility/Heading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof AccordionItem> = {
  title: 'Components/Modules/Accordion',
  component: AccordionItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof AccordionItem>

export const Primary: Story = {
  args: {
    heading: 'Accordion',
    theme: 'primary',
    children: (
      <>
        <Heading level={4}>Mauris vulputate arcu risus</Heading>
        <p>
          Integer feugiat tincidunt tortor, eget molestie turpis aliquam porta.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nullam euismod velit massa, nec condimentum
          nisi mattis quis. Aenean ex ex, pharetra a elit vel, sollicitudin
          aliquet mi. Mauris vitae ex suscipit, mattis augue ac, ultrices magna.
          Fusce elementum auctor est, sit amet ultricies turpis commodo at.
          Vivamus sodales massa non molestie vulputate. Aenean ac fringilla
          nulla. Nunc laoreet nisi sed varius luctus. Donec sed velit eu orci
          ultrices vulputate ac vitae nibh. Fusce interdum eu orci id viverra.
          Ut eu nunc id erat pulvinar fermentum.
        </p>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="container narrow">
        <Story />
      </div>
    ),
  ],
}

export const Secondary: Story = {
  args: {
    heading: 'Accordion',
    theme: 'secondary',
    children: (
      <>
        <Heading level={4}>Mauris vulputate arcu risus</Heading>
        <p>
          Integer feugiat tincidunt tortor, eget molestie turpis aliquam porta.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nullam euismod velit massa, nec condimentum
          nisi mattis quis. Aenean ex ex, pharetra a elit vel, sollicitudin
          aliquet mi. Mauris vitae ex suscipit, mattis augue ac, ultrices magna.
          Fusce elementum auctor est, sit amet ultricies turpis commodo at.
          Vivamus sodales massa non molestie vulputate. Aenean ac fringilla
          nulla. Nunc laoreet nisi sed varius luctus. Donec sed velit eu orci
          ultrices vulputate ac vitae nibh. Fusce interdum eu orci id viverra.
          Ut eu nunc id erat pulvinar fermentum.
        </p>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="container narrow">
        <Story />
      </div>
    ),
  ],
}

export const Tertiary: Story = {
  args: {
    heading: 'Accordion',
    theme: 'tertiary',
    children: (
      <>
        <Heading level={4}>Mauris vulputate arcu risus</Heading>
        <p>
          Integer feugiat tincidunt tortor, eget molestie turpis aliquam porta.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nullam euismod velit massa, nec condimentum
          nisi mattis quis. Aenean ex ex, pharetra a elit vel, sollicitudin
          aliquet mi. Mauris vitae ex suscipit, mattis augue ac, ultrices magna.
          Fusce elementum auctor est, sit amet ultricies turpis commodo at.
          Vivamus sodales massa non molestie vulputate. Aenean ac fringilla
          nulla. Nunc laoreet nisi sed varius luctus. Donec sed velit eu orci
          ultrices vulputate ac vitae nibh. Fusce interdum eu orci id viverra.
          Ut eu nunc id erat pulvinar fermentum.
        </p>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div className="container narrow">
        <Story />
      </div>
    ),
  ],
}
