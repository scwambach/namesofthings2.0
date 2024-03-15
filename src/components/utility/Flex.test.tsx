import { render } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(
      <Flex testId="flex-test">
        <div>Child 1</div>
      </Flex>
    )
    const flexElement = getByTestId('flex-test')
    expect(flexElement).toBeInTheDocument()
    expect(flexElement.tagName).toBe('DIV')
  })

  it('renders with custom props', () => {
    const { getByTestId } = render(
      <Flex
        testId="flex-test"
        className="custom-class"
        columnBreak="lg"
        customLayout="one-third-two-thirds"
        breakpoint="md"
        gap="xs"
      >
        <div>Child 1</div>
        <div>Child 2</div>
      </Flex>
    )
    const flexElement = getByTestId('flex-test')
    expect(flexElement).toBeInTheDocument()
    expect(flexElement.tagName).toBe('DIV')
    expect(flexElement).toHaveClass('flex')
    expect(flexElement).toHaveClass('column-lg')
    expect(flexElement).toHaveClass('one-third-two-thirds')
    expect(flexElement).toHaveClass('break-md')
    expect(flexElement).toHaveClass('gap-xs')
  })

  it('renders with default elementTag', () => {
    const { getByTestId } = render(
      <Flex testId="flex-test" elementTag="section">
        <div>Child 1</div>
      </Flex>
    )
    const flexElement = getByTestId('flex-test')
    expect(flexElement.tagName).toBe('SECTION')
  })
})
