import { render } from '@testing-library/react'
import { Stat } from './Stat'
import { StatProps } from '@utils/types'
import * as Icon from '@phosphor-icons/react'

describe('Stat Component', () => {
  const className = 'custom-stat'
  const icon = 'RocketLaunch' as keyof typeof Icon
  const numberPrefix = '$'
  const numberSuffix = 'USD'
  const subtitle = 'Subtitle'
  const tags = ['Tag1', 'Tag2']
  const testId = 'stat-test'
  const decimals = true
  const theme = 'secondary'
  const maxValue = 1000
  const title = 'Title'
  const type = 'currency'
  const value = 500

  const defaultProps: StatProps = {
    className: className,
    icon: icon,
    numberPrefix: numberPrefix,
    numberSuffix: numberSuffix,
    subtitle: subtitle,
    tags: tags,
    testId: testId,
    decimals: decimals,
    theme: theme,
    maxValue: maxValue,
    title: title,
    type: type,
    value: value,
  }

  it('renders without crashing', () => {
    const { container } = render(<Stat {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders title, value, subtitle, and tags correctly', () => {
    const { getByText } = render(<Stat {...defaultProps} />)
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(numberPrefix)).toBeInTheDocument()
    expect(getByText(`$${value}.00`)).toBeInTheDocument()
    expect(getByText(numberSuffix)).toBeInTheDocument()
    expect(getByText(subtitle)).toBeInTheDocument()
    tags.forEach((tag) => {
      expect(getByText(tag)).toBeInTheDocument()
    })
  })

  it('formats the value correctly based on type and decimals', () => {
    const { getByText } = render(<Stat {...defaultProps} />)
    expect(getByText('$500.00')).toBeInTheDocument()
  })

  it('applies provided class name', () => {
    const { container } = render(<Stat {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })

  it('renders the icon if provided', () => {
    const { getByTestId } = render(<Stat {...defaultProps} />)
    expect(getByTestId(testId).querySelector('.icon')).toBeInTheDocument()
  })
})
