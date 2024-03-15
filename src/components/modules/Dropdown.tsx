'use client'
import { useEffect, useRef, useState } from 'react'
import { Button, LinkObject } from '@components/modules'
import { Flex } from '@components/utility'
import { DropdownProps } from '@utils/types'

export const Dropdown = ({ items, ...props }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  const doAnyListItemsHaveFocus = () => {
    if (!ref.current) {
      return false
    }
    const listItems = ref.current.querySelectorAll('.menu .linkObject')
    let hasFocus = false
    listItems.forEach((item) => {
      if (item === document.activeElement) {
        hasFocus = true
      }
    })
    return hasFocus
  }

  useEffect(() => {
    // click anywhere outside the ref to close the dropdown
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      id={props.componentId}
      ref={ref}
      className={`dropdown${open ? ' open' : ''}${props.className ? ` ${props.className}` : ''}`}
    >
      <Button
        suffixIcon="CaretDown"
        {...props}
        type="button"
        href={undefined}
        className="toggle"
        onClick={() => {
          setOpen(!open)
        }}
      />
      <Flex direction="column" gap="none" className="menu">
        {items?.map((item, index) => (
          <LinkObject
            key={item.href + index}
            {...item}
            onClick={() => {
              setOpen(false)
            }}
            onBlur={() => {
              setTimeout(() => {
                doAnyListItemsHaveFocus() ? setOpen(true) : setOpen(false)
              }, 10)
            }}
          />
        ))}
      </Flex>
    </div>
  )
}
