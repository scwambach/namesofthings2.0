import { render, fireEvent } from '@testing-library/react'
import { Alert } from './Alert'
import '@testing-library/jest-dom'

describe('Alert component', () => {
  it('renders alert with correct message and type', () => {
    const componentId = 'testAlert'
    const message = 'Test message'
    const type = 'success'

    const { getByText } = render(
      <Alert componentId={componentId} message={message} type={type} />
    )

    const alertElement = getByText(message)
    expect(alertElement).toBeInTheDocument()
    expect(alertElement.parentElement?.parentElement).toHaveClass(
      `alert ${type}`
    )
  })

  it('hides alert on close button click', () => {
    const componentId = 'testAlert'
    const message = 'Test message'
    const type = 'success'

    const { getByTestId } = render(
      <Alert componentId={componentId} message={message} type={type} />
    )

    const closeButton = getByTestId('closeButton')
    fireEvent.click(closeButton)

    expect(sessionStorage.getItem(`alert_${componentId}`)).toBe('true')
  })

  it('hides alert if componentId is not provided', () => {
    const message = 'Test message'
    const type = 'success'

    const { getByText } = render(<Alert message={message} type={type} />)

    const alertElement = getByText(message)
    expect(alertElement).toBeInTheDocument()
    expect(alertElement.parentElement?.parentElement).toHaveClass(
      `alert ${type}`
    )
  })

  it('hides alert if sessionStorage contains componentId', () => {
    const componentId = 'testAlert'
    const message = 'Test message'
    const type = 'success'

    sessionStorage.setItem(`alert_${componentId}`, 'true')

    const { getByText } = render(
      <Alert componentId={componentId} message={message} type={type} />
    )

    const alertElement = getByText(message)
    expect(alertElement).toBeInTheDocument()
    expect(alertElement.parentElement?.parentElement).toHaveClass(
      `alert ${type}`
    )
  })
})
