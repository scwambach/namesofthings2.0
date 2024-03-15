import React from 'react'
import { render } from '@testing-library/react'
import { Card } from './Card'
import { ImageObjectProps, PersonProps } from '@utils/types'

describe('Card Component', () => {
  const cardPropsWithLinks = {
    className: 'custom-class',
    title: 'Sample Title',
    description: 'Sample Description',
    date: '2024-02-20',
    authors: [
      {
        firstName: 'John',
        lastName: 'Doe',
        image: { query: 'person', alt: 'John Doe' },
      },
    ] as PersonProps[],
    tags: [{ label: 'Tag 1' }, { label: 'Tag 2' }],
    links: [{ label: 'Link 1', href: 'https://example.com' }],
    image: {
      query: 'image',
      alt: 'Image Alt',
      width: 800,
      height: 600,
    } as ImageObjectProps,
    testId: 'test-card',
  }

  const cardPropsWithHref = {
    className: 'custom-class',
    title: 'Sample Title',
    description: 'Sample Description',
    date: '2024-02-20',
    authors: [
      {
        firstName: 'John',
        lastName: 'Doe',
        image: { query: 'person', alt: 'John Doe' },
      },
    ] as PersonProps[],
    tags: [{ label: 'Tag 1' }, { label: 'Tag 2' }],
    href: 'https://example.com/card',
    image: {
      query: 'image',
      alt: 'Image Alt',
      width: 800,
      height: 600,
    } as ImageObjectProps,
    testId: 'test-card',
  }

  it('renders card with link correctly', () => {
    const { getByText } = render(<Card {...cardPropsWithLinks} />)
    expect(getByText('Sample Title')).toBeInTheDocument()
    expect(getByText('Sample Description')).toBeInTheDocument()
    expect(getByText('Feb 20, 2024')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Tag 1')).toBeInTheDocument()
    expect(getByText('Tag 2')).toBeInTheDocument()
    expect(getByText('Link 1')).toBeInTheDocument()
  })

  it('renders card without link correctly', () => {
    const propsWithoutLink = { ...cardPropsWithLinks, href: '' }
    const { getByText, getByTestId } = render(<Card {...propsWithoutLink} />)
    expect(getByTestId('test-card')).toHaveClass('card')
    expect(getByText('Sample Title')).toBeInTheDocument()
    expect(getByText('Sample Description')).toBeInTheDocument()
    expect(getByText('Feb 20, 2024')).toBeInTheDocument()
    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByText('Tag 1')).toBeInTheDocument()
    expect(getByText('Tag 2')).toBeInTheDocument()
    expect(getByText('Link 1')).toBeInTheDocument()
  })

  it('renders card with image and link correctly', () => {
    const { getByAltText, getByTestId } = render(
      <Card {...cardPropsWithHref} />
    )
    expect(getByTestId('test-card')).toHaveClass('card link')
    expect(getByAltText('Image Alt')).toBeInTheDocument()
    expect(document.querySelector('a')).toHaveAttribute(
      'href',
      'https://example.com/card'
    )
  })
})
