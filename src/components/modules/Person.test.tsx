import { render } from '@testing-library/react'
import { Person } from './Person'
import * as Icon from '@phosphor-icons/react'
import { PersonProps } from '@utils/types'

describe('Person Component', () => {
  const imageObjectProps = {
    query: 'face',
    alt: 'Person Image',
  }

  const socials = [
    {
      href: 'https://example.com',
      screenReader: 'Example',
      icon: 'GithubLogo' as keyof typeof Icon,
    },
    {
      href: 'https://example.com',
      screenReader: 'Example',
      icon: 'TwitterLogo' as keyof typeof Icon,
    },
  ]

  const defaultProps: PersonProps = {
    firstName: 'John',
    lastName: 'Doe',
    className: 'custom-class',
    image: imageObjectProps,
    socials: socials,
    title: 'Software Engineer',
  }

  it('renders without crashing', () => {
    const { container } = render(<Person {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders first and last name', () => {
    const { getByText } = render(<Person {...defaultProps} />)
    expect(
      getByText(`${defaultProps.firstName} ${defaultProps.lastName}`)
    ).toBeInTheDocument()
  })

  it('renders title', () => {
    const { getByText } = render(<Person {...defaultProps} />)
    expect(getByText(defaultProps.title as string)).toBeInTheDocument()
  })

  it('renders image with correct alt text', () => {
    const { getByAltText } = render(<Person {...defaultProps} />)
    expect(getByAltText('Person Image')).toBeInTheDocument()
  })

  it('renders social links with correct href and aria-label', () => {
    const { getAllByLabelText } = render(<Person {...defaultProps} />)
    const socialLinks = getAllByLabelText(/Example/i)
    expect(socialLinks.length).toBe(defaultProps.socials!.length)
    socialLinks.forEach((link, index) => {
      expect(link.getAttribute('href')).toBe(defaultProps.socials![index].href)
    })
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-person'
    const { container } = render(
      <Person {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('renders without socials', () => {
    const { queryByLabelText } = render(
      <Person {...defaultProps} socials={undefined} />
    )
    expect(queryByLabelText(/Example/i)).toBeNull()
  })
})
