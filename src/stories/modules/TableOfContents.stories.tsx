import { TableOfContents as TableOfContentsItem } from '@components/modules/TableOfContents'
import { Flex, Markdown } from '@components/utility'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TableOfContentsItem> = {
  title: 'Components/Modules',
  component: TableOfContentsItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof TableOfContentsItem>

export const TableOfContents: Story = {
  args: {
    targetId: 'postContent',
  },
  decorators: [
    (Story) => (
      <Flex
        gap="lg"
        breakpoint="lg"
        columnBreak="lg"
        customLayout="one-quarter-three-quarters"
      >
        <Story />

        <Markdown componentId="postContent">{`## Sed imperdiet, sem vitae.\n\nQuisque diam est, feugiat ut volutpat vitae, varius sed justo. In vel condimentum nisl. Fusce ullamcorper, mauris vel tempus tincidunt, mi lorem tempus nisl, non faucibus turpis leo a nibh. Sed eu felis ac risus pharetra tincidunt sed ac urna. Praesent ornare venenatis ante ornare aliquam. Ut aliquet lacinia massa sit amet condimentum. Vestibulum a urna lectus. Nulla at euismod eros.\n\nDonec vehicula eu eros at porta. Donec vulputate, enim id convallis commodo, sem metus pharetra nunc, a posuere justo sapien sit amet nulla. Vivamus semper ipsum mattis dui facilisis laoreet. Donec vehicula at urna tristique gravida. Maecenas ac nulla a sem laoreet fermentum. Sed sed auctor ipsum. Quisque dolor velit, porttitor non scelerisque ac, hendrerit in ligula. Vestibulum efficitur quam orci, facilisis tristique mauris iaculis vitae. [Phasellus](https://google.com \"Phasellus\") id mollis nunc. Phasellus quis iaculis est. Proin iaculis faucibus imperdiet. Donec fermentum, nunc sit amet consectetur suscipit, nibh ante pharetra quam, et posuere mauris turpis sed lectus. Aliquam erat volutpat. Integer at risus ut lacus placerat molestie. Aliquam nec tellus eget nisl tempor interdum.\n\n### Mauris condimentum feugiat metus.\n\n- Maecenas vitae sollicitudin arcu, id.\n- Proin vulputate lacus id eros.\n\n![Image of beer cans](https://www.sproutyourdesign.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fl977smc4%2Fproduction%2F00f844db741071cc9a55ace816ee2f5de5bf202c-1175x963.jpg%3Fw%3D2000%26fm%3Dwebp%26q%3D100%26auto%3Dformat&w=3840&q=100)\n\n### Etiam dictum rhoncus ipsum, ut.\n\nVivamus rhoncus nunc massa, aliquet ullamcorper lectus posuere in. Aenean fermentum luctus dui eu ullamcorper. Proin in dictum nisl. Nam consectetur eu dui quis bibendum. Morbi laoreet magna in velit aliquet, eget ullamcorper lectus fermentum.\n\n> Ut dictum ultrices eleifend. Pellentesque molestie justo neque, sed lacinia ipsum cursus ac. In a.\n\nDonec a suscipit ipsum, sed pharetra nisl. Etiam id eros risus. Fusce fringilla molestie tincidunt. Integer et ornare tortor. Proin ornare eu mauris sed accumsan. Aliquam placerat tincidunt nulla, at congue justo dictum id. In vitae purus et erat viverra feugiat.`}</Markdown>
      </Flex>
    ),
  ],
}
