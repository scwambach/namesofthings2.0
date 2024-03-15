import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Event } from './Event'

describe('Event Component', () => {
  const eventProps = {
    className: 'custom-class',
    location: {
      name: 'Event Location',
      address: '123 Main St, City, Country',
    },
    title: 'Sample Event',
    startTime: '10:00',
    endTime: '12:00',
    doorsOpenTime: '09:30',
    links: [
      { label: 'Register', href: 'https://example.com/register' },
      { label: 'Learn More', href: 'https://example.com/details' },
    ],
    poster: { query: 'party', alt: 'Poster Image', width: 1200, height: 800 },
    date: '2023-03-29',
  }

  it('renders event details and links', () => {
    const { getByText } = render(<Event {...eventProps} />)

    expect(getByText('Event Location')).toBeInTheDocument()
    expect(getByText('Sample Event')).toBeInTheDocument()
    expect(getByText('Mar')).toBeInTheDocument()
    expect(getByText('29')).toBeInTheDocument()
    expect(getByText('2023')).toBeInTheDocument()
    expect(getByText('Event time:')).toBeInTheDocument()
    expect(getByText('Doors open at')).toBeInTheDocument()
    expect(getByText('Register')).toBeInTheDocument()
    expect(getByText('Learn More')).toBeInTheDocument()
  })

  it('opens poster modal when "See Full Image" is clicked', () => {
    const { getByText } = render(<Event {...eventProps} />)
    const seeFullImageButton = getByText('See Full Image')

    const seeFullParent = seeFullImageButton.parentElement

    fireEvent.click(seeFullParent as Element)

    const posterModal = document.querySelector('.galleryModal')
    expect(posterModal).toHaveClass('open')

    const closeButton = getByText('Close Modal')
    fireEvent.click(closeButton)
    expect(posterModal).not.toHaveClass('open')
  })

  it('has google link URL in the address line', () => {
    const { getByText } = render(<Event {...eventProps} />)
    const addressLink = getByText('123 Main St, City, Country')
    const addressLinkParent = addressLink.parentElement
    expect(addressLinkParent).toHaveAttribute(
      'href',
      'https://www.google.com/maps/place/123 Main St, City, Country'
    )
  })
})
