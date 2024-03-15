import { FlexProps } from '@utils/types'

export const Flex = ({
  alignItems = 'flex-start',
  ariaLabel,
  breakpoint,
  children,
  className,
  columnBreak = 'sm',
  componentId,
  customLayout,
  direction = 'row',
  elementTag,
  fill,
  gap = 'md',
  justifyContent = 'flex-start',
  noBreak,
  role,
  style,
  testId,
}: FlexProps) => {
  const elm = elementTag || 'div'
  const Element = elm as keyof JSX.IntrinsicElements

  return (
    <Element
      id={componentId}
      role={role}
      style={style}
      aria-label={ariaLabel}
      className={`flex direction-${direction} align-${alignItems} justify-${justifyContent} gap-${gap} column-${
        columnBreak && !noBreak ? columnBreak : ''
      }${className ? ` ${className}` : ''}${
        customLayout ? ` ${customLayout}` : ''
      }${breakpoint && !noBreak ? ` break-${breakpoint}` : ''}${
        fill ? ' fill' : ''
      }${noBreak ? ' no-break' : ''}`}
      data-testid={testId}
    >
      {children}
    </Element>
  )
}
