import {
  render,
  // fireEvent
} from '@testing-library/react'
import { Dropdown } from './Dropdown'

// TODO: Fix Dropdown component tests

describe('Dropdown Component', () => {
  const defaultProps = {
    label: 'Dropdown Label',
    items: [
      { href: '/item1', copy: 'Item 1' },
      { href: '/item2', copy: 'Item 2' },
    ],
    className: 'custom-class',
  }

  it('renders without crashing', () => {
    const { container } = render(<Dropdown {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  // it('renders label button', () => {
  //   const { getByText } = render(<Dropdown {...defaultProps} />)
  //   expect(getByText(defaultProps.label)).toBeInTheDocument()
  // })

  it('applies custom class name', () => {
    const customClassName = 'custom-dropdown'
    const { container } = render(
      <Dropdown {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  // it('opens dropdown on focus', () => {
  //   const { getByText, queryByText } = render(<Dropdown {...defaultProps} />)
  //   const button = getByText(defaultProps.label)
  //   fireEvent.focus(button)
  //   expect(queryByText(defaultProps.items[0].copy)).toBeInTheDocument()
  //   expect(queryByText(defaultProps.items[1].copy)).toBeInTheDocument()
  // })

  // it('closes dropdown on blur if no list items have focus', () => {
  //   const { getByText, queryByText } = render(<Dropdown {...defaultProps} />)
  //   const button = getByText(defaultProps.label)
  //   fireEvent.focus(button)
  //   fireEvent.blur(button)
  //   expect(queryByText(defaultProps.items[0].copy)).toBeInTheDocument()
  //   expect(queryByText(defaultProps.items[1].copy)).toBeInTheDocument()
  // })

  // it('keeps dropdown open on blur if list items have focus', () => {
  //   const { getByText, queryByText } = render(<Dropdown {...defaultProps} />)
  //   const button = getByText(defaultProps.label)
  //   fireEvent.focus(button)
  //   fireEvent.focus(queryByText(defaultProps.items[0].copy) as HTMLElement)
  //   fireEvent.blur(button)
  //   expect(queryByText(defaultProps.items[0].copy)).toBeInTheDocument()
  //   expect(queryByText(defaultProps.items[1].copy)).toBeInTheDocument()
  // })
})
