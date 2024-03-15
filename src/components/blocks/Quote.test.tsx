import React from 'react'
import { render } from '@testing-library/react'
import { Quote } from './Quote'
import { QuoteProps } from '@utils/types'

describe('Quote Component', () => {
  const quoteProps: QuoteProps = {
    className: 'custom-class',
    testId: 'quote-test',
    quote: 'This is a test quote',
    cite: 'John Doe',
    person: {
      firstName: 'John',
      lastName: 'Doe',
      title: 'Developer',
      company: 'ABC Inc',
      image: {
        query: 'person',
        alt: 'John Doe',
      },
    },
    bgColor: 'green',
  }

  it('renders quote and citation without person', () => {
    const { getByTestId, getByText } = render(<Quote {...quoteProps} />)
    expect(getByTestId('quote-test')).toBeInTheDocument()
    expect(getByText('This is a test quote')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
  })

  it('renders person information', () => {
    const { getByText } = render(<Quote {...quoteProps} />)
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('@ ABC Inc')).toBeInTheDocument()
  })

  it('renders quote with custom background color', () => {
    const { container } = render(<Quote {...quoteProps} />)
    expect(container.firstChild).toHaveClass('quote green')
  })
})
