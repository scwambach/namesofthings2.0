import { render, fireEvent } from '@testing-library/react'
import { Tabs } from './Tabs'
import { TabsProps } from '@utils/types'

describe('Tabs Component', () => {
  const defaultProps: TabsProps = {
    items: [
      { label: 'Tab 1', content: 'Content 1' },
      { label: 'Tab 2', content: 'Content 2' },
    ],
    className: 'custom-class',
    heading: 'Tabs Heading',
    level: 3,
    theme: 'primary',
    subheading: 'Tabs Subheading',
  }

  it('renders without crashing', () => {
    const { container } = render(<Tabs {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders heading when provided', () => {
    const { getByText } = render(<Tabs {...defaultProps} />)
    expect(getByText(defaultProps.heading as string)).toBeInTheDocument()
  })

  it('renders subheading when provided', () => {
    const { getByText } = render(<Tabs {...defaultProps} />)
    expect(getByText(defaultProps.subheading as string)).toBeInTheDocument()
  })

  it('renders correct number of tabs', () => {
    const { container } = render(<Tabs {...defaultProps} />)
    const tabs = container.querySelectorAll('.item')
    expect(tabs.length).toBe(defaultProps.items.length)
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-tabs'
    const { container } = render(
      <Tabs {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('renders correct content for active tab', () => {
    const { getByText } = render(<Tabs {...defaultProps} />)
    expect(getByText('Content 1')).toBeInTheDocument()
  })

  it('changes active tab when clicked', () => {
    const { getByText } = render(<Tabs {...defaultProps} />)
    const tab2Button = getByText('Tab 2')
    fireEvent.click(tab2Button)
    expect(getByText('Content 2')).toBeInTheDocument()
  })

  it('toggles menu when button is clicked', () => {
    const { getByText, queryByText } = render(<Tabs {...defaultProps} />)
    const button = getByText('Tab 2')
    fireEvent.click(button)
    expect(queryByText('Content 2')).toBeInTheDocument()
  })
})
