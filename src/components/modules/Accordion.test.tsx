import { render, fireEvent } from '@testing-library/react'
import { Accordion } from './Accordion'
import { AccordionProps } from '@utils/types'

describe('Accordion Component', () => {
  const defaultProps: AccordionProps = {
    heading: 'Accordion Heading',
    children: 'Accordion Content',
    className: 'custom-class',
    testId: 'content',
  }

  it('renders without crashing', () => {
    const { container } = render(<Accordion {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders correct heading', () => {
    const { getByText } = render(<Accordion {...defaultProps} />)
    expect(getByText(defaultProps.heading)).toBeInTheDocument()
  })

  it('toggles content when button is clicked', () => {
    const { getByText, queryByText } = render(<Accordion {...defaultProps} />)
    const button = getByText(defaultProps.heading)
    fireEvent.click(button)
    expect(queryByText(defaultProps.children as string)).toBeInTheDocument()
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-accordion'
    const { container } = render(
      <Accordion {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('updates aria-expanded attribute when toggling content', () => {
    const { getByText } = render(<Accordion {...defaultProps} />)
    const button = getByText(defaultProps.heading)
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
