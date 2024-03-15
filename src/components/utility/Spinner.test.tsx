import { render } from '@testing-library/react'
import { Spinner } from './Spinner'

describe('Spinner Component', () => {
  const className = 'custom-spinner'
  const size = 20
  const testId = 'spinner-test'

  const defaultProps = {
    className: className,
    size: size,
    testId: testId,
  }

  it('renders without crashing', () => {
    const { container } = render(<Spinner {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the correct size based on provided size prop', () => {
    const { container } = render(<Spinner {...defaultProps} />)
    const spinnerDiv = container.firstChild as HTMLDivElement
    expect(spinnerDiv).toHaveStyle(`width: ${size}px`)
    expect(spinnerDiv).toHaveStyle(`height: ${size}px`)
  })

  it('applies provided class name', () => {
    const { container } = render(<Spinner {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })

  it('renders IconSelector component with correct icon and size', () => {
    const { getByTestId } = render(<Spinner {...defaultProps} />)
    const iconSelectorComponent = getByTestId(testId).querySelector('svg')
    expect(iconSelectorComponent).toBeInTheDocument()
    expect(iconSelectorComponent).toHaveAttribute('width', `${size}`)
    expect(iconSelectorComponent).toHaveAttribute('height', `${size}`)
  })
})
