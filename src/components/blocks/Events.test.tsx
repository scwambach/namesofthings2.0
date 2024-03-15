import React from 'react'
import { render } from '@testing-library/react'
import { Events } from './Events'

describe('Events Component', () => {
  const events = [
    {
      date: '2023-01-20',
      title: 'Event 1',
      startTime: '10:00',
      endTime: '12:00',
      location: {
        name: 'Location 1',
        address: '123 Main St',
      },
      links: [{ label: 'Register', href: 'https://example.com/register' }],
    },
    {
      date: '2022-03-21',
      title: 'Event 2',
      startTime: '14:00',
      endTime: '16:00',
      location: {
        name: 'Location 2',
        address: '456 Elm St',
      },
      links: [{ label: 'More Info', href: 'https://example.com/register' }],
    },
  ]

  it('renders events correctly', () => {
    const { getByText } = render(<Events items={events} />)
    expect(getByText('Event 1')).toBeInTheDocument()
    expect(getByText('Event 2')).toBeInTheDocument()
    expect(getByText('Location 1')).toBeInTheDocument()
    expect(getByText('Location 2')).toBeInTheDocument()
  })

  it('renders event links correctly', () => {
    const { getByText } = render(<Events items={events} />)
    expect(getByText('More Info')).toHaveAttribute(
      'href',
      'https://example.com/register'
    )
    expect(getByText('Register')).toHaveAttribute(
      'href',
      'https://example.com/register'
    )
  })

  it('renders event dates correctly', () => {
    const { getByText } = render(<Events items={events} />)
    expect(getByText('Mar')).toBeInTheDocument()
    expect(getByText('20')).toBeInTheDocument()
    expect(getByText('21')).toBeInTheDocument()
    expect(getByText('2022')).toBeInTheDocument()
  })

  it('renders event times correctly', () => {
    const { getByText } = render(<Events items={events} />)
    expect(getByText('10:00 AM - 12:00 PM')).toBeInTheDocument()
    expect(getByText('2:00 PM - 4:00 PM')).toBeInTheDocument()
  })

  it('renders event locations correctly', () => {
    const { getByText } = render(<Events items={events} />)
    expect(getByText('123 Main St')).toBeInTheDocument()
    expect(getByText('456 Elm St')).toBeInTheDocument()
  })
})
