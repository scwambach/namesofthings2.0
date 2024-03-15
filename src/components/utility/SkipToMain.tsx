'use client'

import { Button } from '@components/modules'

export const SkipToMain = () => {
  return (
    <Button
      className="skipToMain"
      onClick={() => {
        const main = document.getElementById('bodyContent')
        if (main) {
          main.focus()
        }
      }}
    >
      Skip to main content
    </Button>
  )
}
