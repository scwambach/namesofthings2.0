import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'
import { MarkdownProps } from '@utils/types'

export const Markdown = ({
  children,
  className,
  componentId,
  elementTag,
  testId,
}: MarkdownProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      data-testid={testId}
      id={componentId}
      className={`markdown${className ? ` ${className}` : ''}`}
      dangerouslySetInnerHTML={{
        __html: parseMarkdownToHTML(children),
      }}
    />
  )
}
