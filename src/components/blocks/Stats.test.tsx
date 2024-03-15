import { render } from '@testing-library/react'
import { Stats } from './Stats'
import { StatsProps } from '@utils/types'

describe('Stats Component', () => {
  const defaultProps: StatsProps = {
    items: [
      {
        value: 100,
        title: 'Item 1',
      },
      {
        value: 200,
        title: 'Item 2',
        tags: ['Tag 1', 'Tag 2'],
      },
    ],
    className: 'custom-class',
    heading: 'Stats Heading',
    level: 3,
    subheading: 'Stats Subheading',
    gap: 'sm',
  }

  it('renders without crashing', () => {
    const { container } = render(<Stats {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders heading when provided', () => {
    const { getByText } = render(<Stats {...defaultProps} />)
    expect(getByText(defaultProps.heading as string)).toBeInTheDocument()
  })

  it('renders subheading when provided', () => {
    const { getByText } = render(<Stats {...defaultProps} />)
    expect(getByText(defaultProps.subheading as string)).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    const { container } = render(<Stats {...defaultProps} />)
    const statsItems = container.querySelectorAll('.stats .stat')
    expect(statsItems.length).toBe(defaultProps.items.length)
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-stats'
    const { container } = render(
      <Stats {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('renders correct number of columns based on item count', () => {
    const { container } = render(<Stats {...defaultProps} />)
    const grid = container.querySelector('.stats .grid')
    expect(grid).toHaveClass('columns-2') // Since we have 2 items in defaultProps
  })

  it('renders with default gap when not provided', () => {
    const { container } = render(<Stats {...defaultProps} gap={undefined} />)
    const grid = container.querySelector('.stats .grid')
    expect(grid).toHaveClass('gap-xs')
  })

  it('renders with custom gap when provided', () => {
    const customGap = 'md'
    const { container } = render(<Stats {...defaultProps} gap={customGap} />)
    const grid = container.querySelector('.stats .grid')
    expect(grid).toHaveClass(`gap-${customGap}`)
  })

  it('renders items with correct tags', () => {
    const { getByText } = render(<Stats {...defaultProps} />)
    const tag1 = getByText('Tag 1')
    const tag2 = getByText('Tag 2')
    expect(tag1).toBeInTheDocument()
    expect(tag2).toBeInTheDocument()
  })
})
