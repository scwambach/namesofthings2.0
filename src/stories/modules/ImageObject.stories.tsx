import { ImageObject as ImageObjectItem } from '@components/modules/ImageObject'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ImageObjectItem> = {
  title: 'Components/Modules/ImageObject',
  component: ImageObjectItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ImageObjectItem>

export const BlurIn: Story = {
  args: {
    alt: 'Image',
    src: 'https://cdn.sanity.io/images/l977smc4/production/4081eed86268b7e5243aa92630d6db7c7c81d6f9-900x1019.jpg',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAXABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMGBwQF/8QAJBAAAgEEAgIBBQAAAAAAAAAAAQIDAAQFEQYSITGBBxNBUbH/xAAYAQACAwAAAAAAAAAAAAAAAAACBQMEBv/EACERAAICAgIBBQAAAAAAAAAAAAECABEDBBIiQQUxUXGx/9oADAMBAAIRAxEAPwDPOEW8GS5jj47xQ9tKOrjevxWg80+n8eJha8s5g9sW0EPsfNZPxmUz5S3jjZvuIfHX38Vd4uQyw3CW2SvpBZltMrnev1Uabewu4pTJ0NWD+whqY31WcjsLqeFcQwW8nSWZEbW9E0rj5emLus3JIt2jL1ABTyCKU/b1CmIFV9xUuCxZkfFMZK2SgZArhvQY6/lSclsZJ4WiTqjk+waUrIg+7eY+wMeBXxUra4vajtJ2YeCaUpR82+ZW4if/2Q==',
    width: 900,
    height: 1019,
  },
}

export const FromQuery: Story = {
  args: {
    alt: 'Image',
    query: 'technology',
    width: 700,
    height: 300,
  },
}

export const Background: Story = {
  args: {
    alt: 'Image',
    isBackground: true,
    src: 'https://cdn.sanity.io/images/l977smc4/production/4081eed86268b7e5243aa92630d6db7c7c81d6f9-900x1019.jpg',
    blurDataURL:
      'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAXABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAMGBwQF/8QAJBAAAgEEAgIBBQAAAAAAAAAAAQIDAAQFEQYSITGBBxNBUbH/xAAYAQACAwAAAAAAAAAAAAAAAAACBQMEBv/EACERAAICAgIBBQAAAAAAAAAAAAECABEDBBIiQQUxUXGx/9oADAMBAAIRAxEAPwDPOEW8GS5jj47xQ9tKOrjevxWg80+n8eJha8s5g9sW0EPsfNZPxmUz5S3jjZvuIfHX38Vd4uQyw3CW2SvpBZltMrnev1Uabewu4pTJ0NWD+whqY31WcjsLqeFcQwW8nSWZEbW9E0rj5emLus3JIt2jL1ABTyCKU/b1CmIFV9xUuCxZkfFMZK2SgZArhvQY6/lSclsZJ4WiTqjk+waUrIg+7eY+wMeBXxUra4vajtJ2YeCaUpR82+ZW4if/2Q==',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          height: '300px',
          maxWidth: '350px',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
