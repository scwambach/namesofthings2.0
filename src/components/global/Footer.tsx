'use client'
import { Markdown } from '@components/utility'

export const Footer = ({ copy, title }: { copy?: string; title: string }) => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <div className="container">
        <p>
          &copy; {year} {title}
        </p>
        {copy && <Markdown>{copy}</Markdown>}
      </div>
    </footer>
  )
}
