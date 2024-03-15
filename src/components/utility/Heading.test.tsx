import { render } from '@testing-library/react'
import { Heading } from './Heading'

describe('Heading Component', () => {
  it('renders heading with specified level', () => {
    const { getByText } = render(<Heading level={1}>Heading 1</Heading>)
    const heading = getByText('Heading 1')
    expect(heading.tagName).toBe('H1')
  })

  it('renders heading with custom class', () => {
    const { getByText } = render(
      <Heading level={2} className="custom-class">
        Heading 2
      </Heading>
    )
    const heading = getByText('Heading 2')
    expect(heading).toHaveClass('heading custom-class')
  })

  it('renders heading with default class when no className provided', () => {
    const { getByText } = render(<Heading level={3}>Heading 3</Heading>)
    const heading = getByText('Heading 3')
    expect(heading).toHaveClass('heading')
  })
})
