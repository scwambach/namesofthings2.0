'use client'
import { HeadingItem, TableOfContentsProps } from '@utils/types'
import { useEffect, useState } from 'react'
import { LinkObject } from './LinkObject'
import { Flex, Heading, Spinner } from '@components/utility'

// TODO: Create TableOfContents tests and stories

export const TableOfContents = ({
  className,
  componentId,
  targetId,
  testId,
}: TableOfContentsProps) => {
  const [headingsArray, setHeadingsArray] = useState<HeadingItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const target = document.getElementById(targetId)
    const headings = target?.querySelectorAll('h1, h2, h3, h4, h5, h6')

    const headingsObject: HeadingItem[] = []
    headings?.forEach((heading, index) => {
      const id = heading.id
      const text = `${heading.textContent}`
      headingsObject.push({ id, text, index })
    })
    setHeadingsArray(headingsObject)
    setLoading(false)
  }, [targetId])

  const handleClickedLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = document.getElementById(
      `${e.currentTarget.getAttribute('href')?.replace('#', '')}`
    )
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`tableOfContents${className ? ` ${className}` : ''}`}
    >
      <Heading level={2} nonHeadingElement="p">
        Table of Contents
      </Heading>
      {loading ? (
        <Flex
          justifyContent="center"
          alignItems="center"
          style={{
            paddingRight: '5rem',
          }}
        >
          <Spinner size={50} />
        </Flex>
      ) : (
        <ul>
          {headingsArray.map((item) => (
            <li key={item.id + item.index}>
              <LinkObject href={`#${item.id}`} onClick={handleClickedLink}>
                {item.text}
              </LinkObject>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
