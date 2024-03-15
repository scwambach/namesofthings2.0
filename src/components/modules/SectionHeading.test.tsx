import { render } from '@testing-library/react'
import { SectionHeading } from './SectionHeading'
import { SectionHeadingProps } from '@utils/types'

describe('SectionHeading Component', () => {
  const defaultProps: SectionHeadingProps = {
    className: 'custom-class',
    heading: 'Section Heading',
    level: 3,
    subheading: 'Section Subheading',
  }

  it('renders without crashing', () => {
    const { container } = render(<SectionHeading {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders heading when provided', () => {
    const { getByText } = render(<SectionHeading {...defaultProps} />)
    expect(getByText(defaultProps.heading as string)).toBeInTheDocument()
  })

  it('renders subheading when provided', () => {
    const { getByText } = render(<SectionHeading {...defaultProps} />)
    expect(getByText(defaultProps.subheading as string)).toBeInTheDocument()
  })

  it('renders heading with correct level', () => {
    const { container } = render(<SectionHeading {...defaultProps} />)
    const heading = container.querySelector(`h${defaultProps.level}`)
    expect(heading).toBeInTheDocument()
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-section-heading'
    const { container } = render(
      <SectionHeading {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('does not render heading when not provided', () => {
    const { queryByText } = render(
      <SectionHeading {...defaultProps} heading={undefined} />
    )
    expect(queryByText(defaultProps.heading as string)).toBeNull()
  })

  it('does not render subheading when not provided', () => {
    const { queryByText } = render(
      <SectionHeading {...defaultProps} subheading={undefined} />
    )
    expect(queryByText(defaultProps.subheading as string)).toBeNull()
  })
})
