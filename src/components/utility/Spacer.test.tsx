import { render } from '@testing-library/react'
import { Spacer } from './Spacer'

describe('Spacer Component', () => {
  const className = 'custom-spacer'
  const size = 2
  const divide = true

  const defaultProps = {
    className: className,
    size: size,
    divide: divide,
  }

  it('renders without crashing', () => {
    const { container } = render(<Spacer {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders correct padding based on provided size', () => {
    const { container } = render(<Spacer {...defaultProps} />)
    const spacerDiv = container.firstChild as HTMLDivElement
    expect(spacerDiv).toHaveStyle(`padding: ${size}rem 0 ${size}rem 0`)
  })

  it('renders horizontal divider if divide prop is true', () => {
    const { container } = render(<Spacer {...defaultProps} />)
    expect(container.querySelector('hr')).toBeInTheDocument()
  })

  it('does not render horizontal divider if divide prop is false', () => {
    const { container } = render(<Spacer {...defaultProps} divide={false} />)
    expect(container.querySelector('hr')).toBeNull()
  })

  it('applies provided class name', () => {
    const { container } = render(<Spacer {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })
})
