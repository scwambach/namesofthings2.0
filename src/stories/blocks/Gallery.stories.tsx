import { Gallery as GalleryItem } from '@components/blocks/Gallery'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof GalleryItem> = {
  title: 'Components/Blocks',
  component: GalleryItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof GalleryItem>

export const Gallery: Story = {
  args: {
    gap: 'xs',
    columns: 4,
    heading: 'Gallery',
    subheading:
      "It may look like the images aren't loading when selecting the next arrow but they are. The images are just large and take a moment to load.\n\n__That's because we're using placeholder images from Unsplash.__",
    items: [
      {
        query: 'nature 1',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 2',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 3',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 4',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 5',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 6',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 7',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
      {
        query: 'nature 8',
        alt: 'Placeholder image',
        width: 1400,
        height: 800,
      },
    ],
  },
}
