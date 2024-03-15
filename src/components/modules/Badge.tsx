import { addCommas } from '@utils/addCommas'
import { maxPlus } from '@utils/maxPlus'
import { BadgeProps } from '@utils/types'

export const Badge = ({
  className,
  color = 'red',
  componentId,
  elementTag = 'span',
  maxNumber,
  number,
  testId,
}: BadgeProps) => {
  const Element = elementTag as keyof JSX.IntrinsicElements

  return (
    <Element
      id={componentId}
      data-testid={testId}
      className={`badge ${color}${className ? ` ${className}` : ''}`}
    >
      {maxNumber ? maxPlus(number, maxNumber) : addCommas(number)}
    </Element>
  )
}
