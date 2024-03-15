'use client'
import { CarouselProps } from '@utils/types'
import { Banner } from './Banner'
import { Dots } from '@components/modules/Dots'
import { Flex } from '@components/utility'
import { useEffect, useState } from 'react'

// TODO: Create tests

export const Carousel = ({
  className,
  componentId,
  items,
  testId,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const renderedItems = items.map((item, index) => (
    <Banner key={index} {...item} />
  ))

  useEffect(() => {
    const interval = setInterval(() => {
      if (!document.querySelector('.carousel:hover')) {
        setActiveIndex((prev) => (prev + 1) % items.length)
      }
    }, 7000)
    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`carousel${className ? ` ${className}` : ''}`}
    >
      <Flex
        className="slider"
        style={{
          width: `${100 * items.length}%`,
          transform: `translateX(-${activeIndex * (100 / items.length)}%)`,
        }}
        gap="none"
        fill
        noBreak
      >
        {renderedItems}
      </Flex>
      <Dots
        count={items.length}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  )
}
