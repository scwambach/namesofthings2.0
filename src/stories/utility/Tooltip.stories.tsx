import { Tooltip as TooltipItem } from '@components/utility/Tooltip'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TooltipItem> = {
  title: 'Components/Utility',
  component: TooltipItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TooltipItem>

export const Tooltip: Story = {
  args: {
    children: 'nullam id faucibus erat',
    copy: 'Praesent sit amet eros in diam lacinia iaculis. Aenean cursus vel velit id lobortis.',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          marginTop: '120px',
        }}
      >
        Aliquam consequat bibendum neque vel rutrum <Story /> lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Vivamus leo mi, mattis lobortis
        velit sed.
      </div>
    ),
  ],
}
