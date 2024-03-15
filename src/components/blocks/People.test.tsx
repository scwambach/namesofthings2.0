import { render } from '@testing-library/react'
import { People } from './People'
import { PeopleProps } from '@utils/types'

// Mocked data for testing
const mockedPeople: PeopleProps['items'] = [
  {
    firstName: 'John',
    lastName: 'Doe',
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'John Doe',
    },
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    image: {
      src: 'https://via.placeholder.com/150',
      alt: 'Jane Smith',
    },
  },
]

describe('People Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<People items={[]} />)
    expect(container).toBeInTheDocument()
  })

  it('renders correct number of people', () => {
    const { container } = render(<People items={mockedPeople} />)
    const renderedPeople = container.querySelectorAll('.person')
    expect(renderedPeople.length).toBe(mockedPeople.length)
  })

  it('renders correct heading and subheading when provided', () => {
    const heading = 'People List'
    const subheading = 'A list of amazing people'
    const { getByText } = render(
      <People items={[]} heading={heading} subheading={subheading} />
    )
    expect(getByText(heading)).toBeInTheDocument()
    expect(getByText(subheading)).toBeInTheDocument()
  })

  it('renders default column size when not provided', () => {
    const { container } = render(<People items={mockedPeople} />)
    const gridElement = container.querySelector('.grid')
    expect(gridElement).toHaveClass('columns-3')
  })

  it('renders custom column size when provided', () => {
    const customColumns = 4
    const { container } = render(
      <People items={mockedPeople} columns={customColumns} />
    )
    const gridElement = container.querySelector('.grid')
    expect(gridElement).toHaveClass(`columns-${customColumns}`)
  })

  it('renders default gap size when not provided', () => {
    const { container } = render(<People items={mockedPeople} />)
    const gridElement = container.querySelector('.grid')
    expect(gridElement).toHaveClass('gap-sm')
  })

  it('renders custom gap size when provided', () => {
    const customGap = 'lg'
    const { container } = render(
      <People items={mockedPeople} gap={customGap} />
    )
    const gridElement = container.querySelector('.grid')
    expect(gridElement).toHaveClass(`gap-${customGap}`)
  })
})
