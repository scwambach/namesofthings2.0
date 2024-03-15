import { render } from '@testing-library/react'
import { River } from './River'
import { RiverProps } from '@utils/types'

describe('River Component', () => {
  const defaultProps: RiverProps = {
    items: [
      {
        description: 'Description 1',
        image: { query: 'nature', alt: 'Image 1' },
      },
      {
        title: 'Title 2',
        description: 'Description 2',
        image: { query: 'nature', alt: 'Image 2' },
        links: [{ label: 'Link 1', onClick: jest.fn() }],
      },
    ],
    className: 'custom-class',
    testId: 'riverTestId',
    headingLevel: 3,
    theme: 'primary',
  }

  it('renders without crashing', () => {
    const { container } = render(<River {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    const { queryAllByTestId } = render(<River {...defaultProps} />)
    const items = queryAllByTestId(/item-/)
    expect(items.length).toBe(defaultProps.items.length)
  })

  it('renders items with correct content', () => {
    const { getByText } = render(<River {...defaultProps} />)
    const descriptions = [
      getByText('Description 1'),
      getByText('Description 2'),
    ]
    descriptions.forEach((description) => {
      expect(description).toBeInTheDocument()
    })
  })

  it('renders items with correct image', () => {
    const { getAllByAltText } = render(<River {...defaultProps} />)
    const images = getAllByAltText(/Image \d/)
    expect(images.length).toBe(defaultProps.items.length)
  })

  it('renders items with correct links', () => {
    const { getByText } = render(<River {...defaultProps} />)
    const link = getByText('Link 1')
    expect(link).toBeInTheDocument()
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-river'
    const { container } = render(
      <River {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('applies correct heading level', () => {
    const { container } = render(<River {...defaultProps} />)
    const headings = container.querySelectorAll('h3')
    expect(headings.length).toBe(defaultProps.items.length)
  })

  it('applies correct theme to buttons', () => {
    const { getByText } = render(<River {...defaultProps} />)
    const link = getByText('Link 1')
    expect(link).toHaveClass('primary')
  })
})
