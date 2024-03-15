import { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>()

  useEffect(() => {
    if (typeof window === 'undefined') return
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return width
}
