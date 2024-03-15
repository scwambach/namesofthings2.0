import { render } from '@testing-library/react'
import { Breadcrumbs } from './Breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders with required props', () => {
    const crumbs = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ]
    const { getByText, getByTestId } = render(
      <Breadcrumbs
        crumbs={crumbs}
        current="Current Page"
        testId="breadcrumbs"
      />
    )

    expect(getByTestId('breadcrumbs')).toBeInTheDocument()
    expect(getByText('Home')).toBeInTheDocument()
    expect(getByText('Products')).toBeInTheDocument()
    expect(getByText('Current Page')).toBeInTheDocument()
  })

  it('renders with custom className', () => {
    const crumbs = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ]
    const { container } = render(
      <Breadcrumbs
        crumbs={crumbs}
        current="Current Page"
        className="custom-class"
      />
    )

    expect(container.firstChild).toHaveClass('breadcrumbs custom-class')
  })

  it('renders without current when current prop is empty', () => {
    const crumbs = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ]
    const { queryByText } = render(
      <Breadcrumbs crumbs={crumbs} current="" testId="breadcrumbs" />
    )

    expect(queryByText('Current Page')).toBeNull()
  })
})
