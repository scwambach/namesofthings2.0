import React from 'react'
import { render } from '@testing-library/react'
import { FormField } from './FormField'

describe('FormField component', () => {
  it('renders textarea type correctly', () => {
    const { getByTestId } = render(
      <FormField
        type="textarea"
        label="Test Label"
        description="Test Description"
        id="testId"
        testId="formFieldTestId"
      />
    )
    const formField = getByTestId('formFieldTestId')
    expect(formField).toBeInTheDocument()
    expect(formField).toHaveClass('formField')
    expect(formField).toHaveClass('textarea')
    expect(formField).toContainHTML('<textarea')
    expect(formField).toContainHTML('Test Label')
    expect(formField).toContainHTML('Test Description')
  })

  it('renders select type correctly', () => {
    const choices = [
      { id: '1', value: 'value1', copy: 'Option 1' },
      { id: '2', value: 'value2', copy: 'Option 2' },
    ]
    const { getByTestId } = render(
      <FormField
        type="select"
        label="Test Label"
        description="Test Description"
        choices={choices}
        id="testId"
        testId="formFieldTestId"
      />
    )
    const formField = getByTestId('formFieldTestId')
    expect(formField).toBeInTheDocument()
    expect(formField).toHaveClass('formField')
    expect(formField).toHaveClass('select')
    expect(formField).toContainHTML('<select')
    expect(formField).toContainHTML('Test Label')
    expect(formField).toContainHTML('Test Description')
    expect(formField).toContainHTML('<option')
  })

  it('renders checkbox type correctly', () => {
    const choices = [
      { id: '1', copy: 'Option 1' },
      { id: '2', copy: 'Option 2' },
    ]
    const { getByTestId } = render(
      <FormField
        type="checkbox"
        label="Test Label"
        description="Test Description"
        choices={choices}
        id="testId"
        testId="formFieldTestId"
      />
    )
    const formField = getByTestId('formFieldTestId')
    expect(formField).toBeInTheDocument()
    expect(formField).toHaveClass('formField')
    expect(formField).toHaveClass('checkbox')
    expect(formField).toContainHTML('Option 1')
    expect(formField).toContainHTML('Option 2')
    expect(formField.querySelectorAll('input[type="checkbox"]').length).toBe(2)
  })
})
