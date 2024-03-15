import { render } from '@testing-library/react'
import { Banner } from './Banner'

describe('Banner', () => {
  it('renders with required props', () => {
    const { getByText } = render(<Banner heading="Test Heading" />)
    expect(getByText('Test Heading')).toBeInTheDocument()
  })

  it('renders with all props', () => {
    const { getByText, getByTestId } = render(
      <Banner
        heading="Test Heading"
        subheading="Test Subheading"
        message="Test Message"
        backgroundImage={{
          alt: 'Banner Image',
          width: 900,
          height: 500,
          query: 'tech',
        }}
        links={[{ label: 'Button 1' }, { label: 'Button 2' }]}
        crumbs={{
          current: 'Current',
          items: [
            {
              label: 'Item 1',
              href: '/item-1',
            },
            { label: 'Item 2', href: '/item-2' },
          ],
        }}
      />
    )
    expect(getByText('Test Heading')).toBeInTheDocument()
    expect(getByText('Test Subheading')).toBeInTheDocument()
    expect(getByText('Test Message')).toBeInTheDocument()
    expect(getByTestId('banner-image')).toBeInTheDocument()
    expect(getByTestId('banner-heading')).toBeInTheDocument()
    expect(getByText('Button 1')).toBeInTheDocument()
    expect(getByText('Button 2')).toBeInTheDocument()
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const { container } = render(
      <Banner heading="Test Heading" className="custom-class" />
    )
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('renders with custom bgColor', () => {
    const { container } = render(
      <Banner heading="Test Heading" bgColor="red" />
    )
    expect(container.firstChild).toHaveClass('banner red')
  })

  it('renders without image when img prop is not provided', () => {
    const { queryByTestId } = render(<Banner heading="Test Heading" />)
    expect(queryByTestId('banner-image')).toBeNull()
  })

  it('renders without subheading when subheading prop is not provided', () => {
    const { queryByText } = render(<Banner heading="Test Heading" />)
    expect(queryByText('Test Subheading')).toBeNull()
  })

  it('renders without message when message prop is not provided', () => {
    const { queryByText } = render(<Banner heading="Test Heading" />)
    expect(queryByText('Test Message')).toBeNull()
  })

  it('renders without links when links prop is not provided', () => {
    const { queryByText } = render(<Banner heading="Test Heading" />)
    expect(queryByText('Button 1')).toBeNull()
    expect(queryByText('Button 2')).toBeNull()
  })

  it('renders with breadcrumbs when crumbs prop is provided', () => {
    const { getByText } = render(
      <Banner
        heading="Test Heading"
        crumbs={{
          current: 'Current',
          items: [
            {
              label: 'Item 1',
              href: '/item-1',
            },
            { label: 'Item 2', href: '/item-2' },
          ],
        }}
      />
    )
    expect(getByText('Item 1')).toBeInTheDocument()
    expect(getByText('Item 2')).toBeInTheDocument()
  })

  it('does not render breadcrumbs when crumbs prop is not provided', () => {
    const { queryByTestId } = render(<Banner heading="Test Heading" />)
    expect(queryByTestId('breadcrumbs')).toBeNull()
  })

  it('does not render links when links prop is an empty array', () => {
    const { queryByText } = render(<Banner heading="Test Heading" links={[]} />)
    expect(queryByText('Button 1')).toBeNull()
    expect(queryByText('Button 2')).toBeNull()
  })
})
