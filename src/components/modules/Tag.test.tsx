import { render } from '@testing-library/react'
import { Tag } from './Tag'
import { TagProps } from '@utils/types'

describe('Tag Component', () => {
  const className = 'custom-tag'
  const label = 'Tag'
  const theme = 'secondary'
  const elementTag = 'div'

  const defaultProps: TagProps = {
    className: className,
    label: label,
    theme: theme,
    elementTag: elementTag,
  }

  it('renders without crashing', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the label correctly', () => {
    const { getByText } = render(<Tag {...defaultProps} />)
    expect(getByText(label)).toBeInTheDocument()
  })

  it('applies provided class name', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })

  it('applies provided theme', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container.firstChild).toHaveClass(theme)
  })

  it('renders using the correct HTML element based on elementTag prop', () => {
    const { container } = render(<Tag {...defaultProps} />)
    expect(container.firstChild).toHaveProperty('tagName', 'DIV')
  })
})
