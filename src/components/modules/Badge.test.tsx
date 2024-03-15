import { render } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  it('renders with required props', () => {
    const { getByText } = render(<Badge number={42} />)
    expect(getByText('42')).toBeInTheDocument()
  })

  it('renders with custom color', () => {
    const { container } = render(<Badge number={42} color="blue" />)
    const badgeElement = container.firstChild
    expect(badgeElement).toHaveClass('badge blue')
  })

  it('renders with custom element tag', () => {
    const { container } = render(<Badge number={42} elementTag="div" />)
    const badgeElement = container.firstChild as HTMLElement
    expect(badgeElement.nodeName).toBe('DIV')
  })

  it('renders with custom className', () => {
    const { container } = render(<Badge number={42} className="custom-class" />)
    const badgeElement = container.firstChild
    expect(badgeElement).toHaveClass('badge custom-class')
  })

  it('renders maxNumber if provided and number exceeds maxNumber', () => {
    const { getByText } = render(<Badge number={100} maxNumber={50} />)
    expect(getByText('50+')).toBeInTheDocument()
  })

  it('renders number without commas if maxNumber is provided and number does not exceed maxNumber', () => {
    const { getByText } = render(<Badge number={42} maxNumber={50} />)
    expect(getByText('42')).toBeInTheDocument()
  })

  it('renders number with commas if maxNumber is not provided', () => {
    const { getByText } = render(<Badge number={1000} />)
    expect(getByText('1,000')).toBeInTheDocument()
  })

  it('renders maxNumber without commas if maxNumber is provided but number exceeds maxNumber', () => {
    const { getByText } = render(<Badge number={10000} maxNumber={9999} />)
    expect(getByText('9,999+')).toBeInTheDocument()
  })
})
