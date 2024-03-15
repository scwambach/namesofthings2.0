import { Button } from '@components/modules/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Modules/Button',
  component: Button,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    theme: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    theme: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    theme: 'tertiary',
  },
}

export const Unstyled: Story = {
  args: {
    label: 'Unstyled Button',
    unstyled: true,
  },
}

export const WithIcon: Story = {
  args: {
    label: 'Button with Icon',
    icon: 'RocketLaunch',
  },
}

export const WithIconSuffix: Story = {
  args: {
    label: 'Button with Icon',
    suffixIcon: 'Scooter',
    theme: 'secondary',
  },
}
