'use client'
import { Button, ImageObject } from '@components/modules'
import { CaretLeft, CaretRight, X } from '@phosphor-icons/react'
import { colors } from '@utils/settings'
import { ComponentProps, ImageObjectProps } from '@utils/types'

interface GalleryModalProps extends ComponentProps {
  isModalOpen?: boolean
  activeIndex?: number
  setActiveIndex: (index: number) => void
  setIsModalOpen: (isOpen: boolean) => void
  items: ImageObjectProps[]
  controls?: boolean
}

export const GalleryModal = ({
  activeIndex = 0,
  componentId,
  controls = true,
  isModalOpen,
  items,
  setActiveIndex,
  setIsModalOpen,
}: GalleryModalProps) => {
  return (
    <div
      id={componentId}
      className={`galleryModal ${isModalOpen ? 'open' : 'closed'}`}
    >
      <Button
        className="close"
        type="button"
        ariaLabel="Close Modal"
        unstyled
        onClick={() => setIsModalOpen(false)}
      >
        <X color={colors.white} size={50} />
        <div className="srOnly">Close Modal</div>
      </Button>
      {controls && (
        <Button
          className={`control prev${activeIndex === 0 ? ' disabled' : ''}`}
          type="button"
          disabled={activeIndex === 0}
          unstyled
          onClick={() => setActiveIndex(activeIndex - 1)}
        >
          <CaretLeft color={colors.white} size={50} />
          <div className="srOnly">Previous Image</div>
        </Button>
      )}

      <ImageObject {...items[activeIndex]} className="activeImage" />

      {controls && (
        <Button
          className={`control next${
            activeIndex === items.length - 1 ? ' disabled' : ''
          }`}
          type="button"
          unstyled
          disabled={activeIndex === items.length - 1}
          onClick={() => setActiveIndex(activeIndex + 1)}
        >
          <CaretRight color={colors.white} size={50} />
          <div className="srOnly">Next Image</div>
        </Button>
      )}
    </div>
  )
}
