import { render } from '@testing-library/react'
import { Tooltip } from './Tooltip'

describe('Tooltip Component', () => {
  const className = 'custom-tooltip'
  const childrenContent = 'Hover Me'
  const copy = 'Tooltip Copy'

  const defaultProps = {
    className: className,
    children: childrenContent,
    copy: copy,
  }

  it('renders without crashing', () => {
    const { container } = render(<Tooltip {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the children correctly', () => {
    const { getByText } = render(<Tooltip {...defaultProps} />)
    expect(getByText(childrenContent)).toBeInTheDocument()
  })

  it('renders the tooltip copy correctly', () => {
    const { getByText } = render(<Tooltip {...defaultProps} />)
    expect(getByText(copy)).toBeInTheDocument()
  })

  it('applies provided class name', () => {
    const { container } = render(<Tooltip {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })
})
