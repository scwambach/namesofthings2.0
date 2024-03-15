import { useEffect, useState } from 'react'
import { useHasWindow } from '@hooks/useHasWindow'

export const useScrollingDown = () => {
  const [scrollingDown, setScrollingDown] = useState(false)

  const hasWindow = useHasWindow()
  useEffect(() => {
    if (!hasWindow) {
      return
    }

    window.onscroll = () => {
      if (window.oldScroll < window.scrollY && window.scrollY > 100) {
        setScrollingDown(true)
      } else if (window.scrollY < 100) {
        setScrollingDown(false)
      }

      window.oldScroll = window.scrollY
    }
  }, [hasWindow])
  return scrollingDown
}
