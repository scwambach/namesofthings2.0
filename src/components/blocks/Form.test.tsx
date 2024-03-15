import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Form } from './Form'

describe('Form component', () => {
  const onSubmitMock = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders form with default submit text', () => {
    const { getByTestId, getByText } = render(<Form testId="form" />)
    const form = getByTestId('form')

    expect(form).toBeInTheDocument()
    expect(getByText('Submit')).toBeInTheDocument()
  })

  it('renders form with custom heading and submit text', () => {
    const { getByTestId, getByText } = render(
      <Form heading="Custom Heading" submitCopy="Custom Submit" testId="form" />
    )
    const form = getByTestId('form')

    expect(form).toBeInTheDocument()
    expect(getByText('Custom Heading')).toBeInTheDocument()
    expect(getByText('Custom Submit')).toBeInTheDocument()
  })

  it('calls onSubmit when form is submitted', () => {
    const { getByTestId } = render(
      <Form onSubmit={onSubmitMock} testId="form" />
    )
    const form = getByTestId('form')
    const formElement = form.querySelector('form') as HTMLFormElement

    fireEvent.submit(formElement)

    expect(onSubmitMock).toHaveBeenCalled()
  })
})
