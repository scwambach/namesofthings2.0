import { GridProps } from '@utils/types'

export const Grid = ({
  ariaLabel,
  children,
  className,
  columns = 3,
  componentId,
  elementTag,
  gap,
  role,
  style,
  testId,
}: GridProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      role={role}
      aria-label={ariaLabel}
      id={componentId}
      style={style}
      className={`grid gap-${gap} columns-${columns}${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      {children}
    </Element>
  )
}
