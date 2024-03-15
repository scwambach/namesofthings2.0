'use client'
import { Button } from '@components/modules'
import { Box } from '@components/utility'
import { AccordionProps } from '@utils/types'
import { useEffect, useRef, useState } from 'react'

export const Accordion = ({
  children,
  className,
  componentId,
  heading,
  testId,
  theme,
}: AccordionProps) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState<number | undefined>(0)

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const content = ref.current.querySelector('.content') as HTMLElement
    if (content) {
      if (open) {
        setHeight(content.scrollHeight)
      } else {
        setHeight(0)
      }

      const handleResize = () => {
        if (open) {
          setHeight(0)
          setOpen(false)
        }
      }

      window.addEventListener('resize', handleResize)
    }
  }, [open])

  return (
    <div
      id={componentId}
      data-testid={testId}
      ref={ref}
      className={`accordion${
        open ? ' open' : ''
      }${className ? ` ${className}` : ''}`}
    >
      <Button
        type="button"
        theme={theme}
        suffixIcon="CaretDown"
        onClick={() => setOpen(!open)}
        ariaExpanded={open}
        ariaControls="accordion-content"
      >
        {heading}
      </Button>
      <Box
        shadow={2}
        overflow
        className="content"
        style={{
          height: `${height}px`,
          overflow: 'hidden',
        }}
      >
        <div className="inner">{children}</div>
      </Box>
    </div>
  )
}
