import { LogoRow as LogoRowItem } from '@components/blocks/LogoRow'
import type { Meta, StoryObj } from '@storybook/react'
import Logo1 from '@images/logoipsum-230.svg'
import Logo2 from '@images/logoipsum-231.svg'
import Logo3 from '@images/logoipsum-232.svg'

const meta: Meta<typeof LogoRowItem> = {
  title: 'Components/Blocks',
  component: LogoRowItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LogoRowItem>

export const LogoRow: Story = {
  args: {
    items: [
      {
        image: Logo1,
        title: 'Logo 1',
      },
      {
        image: Logo2,
        title: 'Logo 2',
      },
      {
        image: Logo3,
        title: 'Logo 3',
      },
    ],
  },
}
