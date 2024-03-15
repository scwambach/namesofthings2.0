import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button Component', () => {
  it('renders button with default type', () => {
    const { getByTestId } = render(
      <Button type="button" testId="test-button">
        Click me
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button.tagName).toBe('BUTTON')
  })

  it('renders button with specified type', () => {
    const { getByTestId } = render(
      <Button testId="test-button" type="submit">
        Submit
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button.tagName).toBe('BUTTON')
    expect(button.getAttribute('type')).toBe('submit')
  })

  it('renders button as link', () => {
    const { getByTestId } = render(
      <Button testId="test-button" type="link" href="/path">
        Link
      </Button>
    )
    const link = getByTestId('test-button')
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/path')
  })

  it('renders unstyled button', () => {
    const { getByTestId } = render(
      <Button testId="test-button" unstyled>
        Unstyled
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button).toHaveClass('unstyled')
  })

  it('calls onClick handler', () => {
    const handleClick = jest.fn()
    const { getByTestId } = render(
      <Button testId="test-button" onClick={handleClick}>
        Click me
      </Button>
    )
    const button = getByTestId('test-button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('renders button with custom class', () => {
    const { getByTestId } = render(
      <Button testId="test-button" className="custom-class">
        Custom Button
      </Button>
    )
    const button = getByTestId('test-button')
    expect(button).toHaveClass('button custom-class')
  })

  it('renders button without href if not provided for link type', () => {
    const { getByTestId } = render(
      <Button testId="test-button" type="link">
        Link
      </Button>
    )
    const link = getByTestId('test-button')
    expect(link.tagName).toBe('A')
    expect(link.getAttribute('href')).toBe('/')
  })
})
