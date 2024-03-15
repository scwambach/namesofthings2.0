import { render, fireEvent } from '@testing-library/react'
import { Gallery } from '../Gallery'
import { GalleryProps } from '@utils/types'

describe('Gallery Component', () => {
  const items = [
    { query: 'technology 1', alt: 'Image 1', width: 100, height: 100 },
    { query: 'technology 2', alt: 'Image 2', width: 100, height: 100 },
    { query: 'technology 3', alt: 'Image 3', width: 100, height: 100 },
  ]

  const defaultProps: GalleryProps = {
    items,
    className: 'custom-class',
    heading: 'Gallery Heading',
    level: 3,
    testId: 'galleryTestId',
    subheading: 'Gallery Subheading',
    columns: 4,
    gap: 'md',
  }

  it('renders without crashing', () => {
    const { container } = render(<Gallery {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders heading when provided', () => {
    const { getByText } = render(<Gallery {...defaultProps} />)
    expect(getByText(defaultProps.heading as string)).toBeInTheDocument()
  })

  it('renders subheading when provided', () => {
    const { getByText } = render(<Gallery {...defaultProps} />)
    expect(getByText(defaultProps.subheading as string)).toBeInTheDocument()
  })

  it('renders correct number of items', () => {
    const { container } = render(<Gallery {...defaultProps} />)
    const galleryItems = container.querySelectorAll('.galleryItem')
    expect(galleryItems.length).toBe(defaultProps.items.length)
  })

  it('applies custom class name', () => {
    const customClassName = 'custom-gallery'
    const { container } = render(
      <Gallery {...defaultProps} className={customClassName} />
    )
    expect(container.firstChild).toHaveClass(customClassName)
  })

  it('opens modal when item is clicked', () => {
    const { container, getByTestId } = render(<Gallery {...defaultProps} />)
    fireEvent.click(getByTestId('galleryTestId-item-1'))
    const modal = container.querySelector('.galleryModal')
    expect(modal).not.toHaveClass('closed')
  })

  it('closes modal when close button is clicked', () => {
    const { container, getByText } = render(<Gallery {...defaultProps} />)
    fireEvent.click(getByText('Close Modal'))
    const modal = container.querySelector('.galleryModal')
    expect(modal).toHaveClass('closed')
  })

  it('navigates to next image when next button is clicked', () => {
    const { container, getByText } = render(<Gallery {...defaultProps} />)
    fireEvent.click(getByText('Next Image'))
    const activeImage = container.querySelector('.activeImage img')
    expect(activeImage?.getAttribute('alt')).toBe('Image 2')
  })

  it('navigates to previous image when previous button is clicked', () => {
    const { container, getByText } = render(<Gallery {...defaultProps} />)
    fireEvent.click(getByText('Next Image'))
    fireEvent.click(getByText('Previous Image'))
    const activeImage = container.querySelector('.activeImage img')
    expect(activeImage?.getAttribute('alt')).toBe('Image 1')
  })

  it('disables previous button when on first image', () => {
    const { container, getByText, getByTestId } = render(
      <Gallery {...defaultProps} />
    )
    const firstImage = getByTestId('galleryTestId-item-0')
    fireEvent.click(firstImage)
    const modal = container.querySelector('.galleryModal')
    expect(modal).not.toHaveClass('closed')
    const previousButton = getByText('Previous Image')
    const previoiusParent = previousButton.parentElement
    expect(previoiusParent).toBeDisabled()
  })

  it('disables next button when on last image', () => {
    const { container, getByText, getByTestId } = render(
      <Gallery {...defaultProps} />
    )
    const lastImage = getByTestId('galleryTestId-item-2')
    fireEvent.click(lastImage)
    const modal = container.querySelector('.galleryModal')
    expect(modal).not.toHaveClass('closed')
    const nextButton = getByText('Next Image')
    const nextParent = nextButton.parentElement
    expect(nextParent).toBeDisabled()
  })
})
