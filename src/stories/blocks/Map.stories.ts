import { Map as MapItem } from '@components/blocks/Map'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MapItem> = {
  title: 'Components/Blocks',
  component: MapItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MapItem>

export const Map: Story = {
  args: {
    markers: [
      {
        lat: 37.963211,
        lng: -87.56678,
      },
      {
        lat: 37.961391,
        lng: -87.565758,
      },
    ],
  },
}
