'use client'
import { Button } from '@components/modules'
import { X } from '@phosphor-icons/react'
import { DrawerProps } from '@utils/types'
import { useEffect, useState } from 'react'

export const Drawer = ({
  children,
  className,
  componentId,
  direction = 'right',
  open,
  triggerCopy,
  triggerTheme,
  triggerUnstyled,
}: DrawerProps) => {
  const [isOpen, setIsOpen] = useState(open || false)

  useEffect(() => {
    const closeOnEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', closeOnEscape)
  }, [])
  return (
    <span
      id={componentId}
      className={`drawer${className ? ` ${className}` : ''}`}
    >
      <Button
        type="button"
        label={triggerCopy}
        theme={triggerTheme}
        unstyled={triggerUnstyled}
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      />
      <div className={`screen ${isOpen ? 'open' : 'closed'}`} />
      <div className={`drawerBox ${direction} ${isOpen ? 'open' : 'closed'}`}>
        <Button
          className="close"
          type="button"
          unstyled
          onClick={() => setIsOpen(false)}
        >
          <X size={30} />
        </Button>

        <div className="body">{children}</div>
      </div>
    </span>
  )
}
