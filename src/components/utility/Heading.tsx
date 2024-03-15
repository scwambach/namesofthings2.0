import { headingFont } from '@utils/fonts'
import { HeadingProps } from '@utils/types'

export const Heading = ({
  children,
  className,
  componentId,
  level = 3,
  nonHeadingElement,
  testId,
}: HeadingProps) => {
  const HeadingTag =
    nonHeadingElement || (`h${level}` as keyof JSX.IntrinsicElements)

  return (
    <HeadingTag
      id={componentId}
      data-testid={testId}
      className={`heading ${
        headingFont.className
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </HeadingTag>
  )
}
