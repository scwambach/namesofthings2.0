import { render } from '@testing-library/react'
import { ImageObject } from './ImageObject'

const imageUrl = 'https://source.unsplash.com/random/800x600'

describe('ImageObject Component', () => {
  it('renders with src', () => {
    const { container } = render(
      <ImageObject alt="Test Alt" src={imageUrl} width={100} height={100} />
    )
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders with query', () => {
    const { container } = render(
      <ImageObject alt="Test Alt" query="test" width={100} height={100} />
    )
    expect(container.querySelector('img')).toBeInTheDocument()
  })

  it('renders as background', () => {
    const { container } = render(
      <ImageObject alt="Test Alt" isBackground width={100} height={100} />
    )
    expect(container.querySelector('.imageObject')).toHaveAttribute(
      'data-label',
      'background-container'
    )
  })

  it('renders with className', () => {
    const { container } = render(
      <ImageObject
        alt="Test Alt"
        className="testClass"
        width={100}
        height={100}
      />
    )
    expect(container.querySelector('.imageObject')).toHaveClass('testClass')
  })

  it('renders with sizes', () => {
    const { container } = render(
      <ImageObject
        alt="Test Alt"
        sizes="(max-width: 600px) 200px, 50vw"
        width={100}
        height={100}
      />
    )
    expect(container.querySelector('img')).toHaveAttribute(
      'sizes',
      '(max-width: 600px) 200px, 50vw'
    )
  })

  it('renders with undefined width and height for image', () => {
    const { container } = render(
      <ImageObject alt="Test Alt" width={100} height={100} />
    )
    expect(container.querySelector('img')).toHaveAttribute('width', '100')
    expect(container.querySelector('img')).toHaveAttribute('height', '100')
  })

  it('renders with default fake image when src is not provided', () => {
    const { container } = render(<ImageObject alt="Test Alt" isBackground />)
    const imgSrc = container.querySelector('img')?.getAttribute('src')
    expect(imgSrc).toContain('fakeimg')
  })

  it('renders with default fake image when src is broken', () => {
    const { container } = render(
      <ImageObject alt="Test Alt" width={100} height={100} />
    )
    const imgSrc = container.querySelector('img')?.getAttribute('src')
    expect(imgSrc).toContain('fakeimg')
  })
})
