import { JSXElementConstructor, ReactElement, cloneElement } from 'react'

export function repeater(
  num: number,
  element: ReactElement<any, string | JSXElementConstructor<any>>
) {
  return Array.from({ length: num }, (_, index) =>
    cloneElement(element, { key: index })
  )
}
