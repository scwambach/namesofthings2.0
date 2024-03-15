import { fireEvent, render } from '@testing-library/react'
import { Modal } from './Modal'
import { ModalProps } from '@utils/types'

describe('Modal Component', () => {
  const triggerCopy = 'Open Modal'
  const className = 'custom-modal'
  const mockButtons = [
    { label: 'Save', onClick: jest.fn() },
    { label: 'Delete', onClick: jest.fn() },
  ]
  const childrenContent = 'Modal Content'

  const defaultProps: ModalProps = {
    className: className,
    triggerCopy: triggerCopy,
    testId: 'modal',
    children: <div>{childrenContent}</div>,
    buttons: mockButtons,
  }

  it('renders without crashing', () => {
    const { container } = render(<Modal {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('toggles the modal open and closed when trigger button is clicked', () => {
    const { getByText } = render(<Modal {...defaultProps} />)
    const triggerButton = getByText(triggerCopy)
    const parent = document.querySelector('.modalBox')
    fireEvent.click(triggerButton)
    expect(parent).toHaveClass('open')
    fireEvent.click(triggerButton)
    expect(parent).not.toHaveClass('open')
  })

  it('renders children content when modal is open', () => {
    const { getByText } = render(<Modal {...defaultProps} />)
    const triggerButton = getByText(triggerCopy)
    fireEvent.click(triggerButton)
    expect(getByText(childrenContent)).toBeInTheDocument()
  })

  it('renders buttons correctly when provided', () => {
    const { getByText } = render(<Modal {...defaultProps} />)
    const triggerButton = getByText(triggerCopy)
    fireEvent.click(triggerButton)
    mockButtons.forEach((button) => {
      expect(getByText(button.label)).toBeInTheDocument()
    })
  })

  it('closes the modal when close button is clicked', () => {
    const { getByText } = render(<Modal {...defaultProps} />)
    const triggerButton = getByText(triggerCopy)
    fireEvent.click(triggerButton)
    const closeButton = getByText('Close')
    fireEvent.click(closeButton)
    const parent = document.querySelector('.modalBox')
    expect(parent).not.toHaveClass('open')
  })

  it('closes the modal when Escape key is pressed', () => {
    const { getByText } = render(<Modal {...defaultProps} />)
    const triggerButton = getByText(triggerCopy)
    fireEvent.click(triggerButton)
    fireEvent.keyDown(document, { key: 'Escape' })
    const parent = document.querySelector('.modalBox')
    expect(parent).not.toHaveClass('open')
  })

  it('applies provided class name', () => {
    const { container } = render(<Modal {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })
})
