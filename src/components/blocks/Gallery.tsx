'use client'
import { Button, ImageObject, GalleryModal } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container, Grid } from '@components/utility'
import { GalleryProps } from '@utils/types'
import { useEffect, useState } from 'react'

export const Gallery = ({
  className,
  columns = 4,
  componentId,
  container,
  gap,
  heading,
  items,
  level,
  subheading,
  testId,
}: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [activeIndex])

  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`gallery${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Grid gap={gap} columns={columns}>
          {items.map((item, index) => (
            <Button
              testId={testId ? `${testId}-item-${index}` : undefined}
              className="galleryItem"
              key={item.query || item.src}
              type="button"
              unstyled
              onClick={() => {
                setIsModalOpen(true)
                setActiveIndex(items.indexOf(item))
              }}
            >
              <ImageObject {...item} isBackground width={400} height={400} />
            </Button>
          ))}
        </Grid>
        <GalleryModal
          items={items}
          activeIndex={activeIndex}
          isModalOpen={isModalOpen}
          setActiveIndex={setActiveIndex}
          setIsModalOpen={setIsModalOpen}
          controls
        />
      </Container>
    </section>
  )
}
