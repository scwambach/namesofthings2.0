import { render } from '@testing-library/react'
import { Avatar } from './Avatar'
import { Colors } from '@utils/types'

describe('Avatar', () => {
  it('renders with required props', () => {
    const { getByText } = render(<Avatar firstName="John" lastName="Doe" />)
    expect(getByText('JD')).toBeInTheDocument()
  })

  it('renders with image and alt text', () => {
    const image = {
      query: 'avatar',
      alt: 'Avatar Image',
    }
    const { getByAltText } = render(
      <Avatar firstName="John" lastName="Doe" image={image} />
    )
    expect(getByAltText('John Doe')).toBeInTheDocument()
  })

  it('renders with custom size', () => {
    const { container } = render(
      <Avatar firstName="John" lastName="Doe" size={8} />
    )
    const avatarElement = container.firstChild
    expect(avatarElement).toHaveStyle('height: 8rem')
    expect(avatarElement).toHaveStyle('width: 8rem')
  })

  it('renders with badge', () => {
    const badge = {
      number: 3,
      color: 'red' as 'red' | 'blue' | 'green' | 'orange',
    }
    const { getByText } = render(
      <Avatar firstName="John" lastName="Doe" badge={badge} />
    )
    expect(getByText('3')).toBeInTheDocument()
  })

  it('does not render badge if number is 0', () => {
    const badge = {
      number: 0,
      color: 'red' as Colors,
    }
    const { queryByText } = render(
      <Avatar firstName="John" lastName="Doe" badge={badge} />
    )
    expect(queryByText('0')).toBeNull()
  })

  it('renders with custom className', () => {
    const { container } = render(
      <Avatar firstName="John" lastName="Doe" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('avatar custom-class')
  })
})
