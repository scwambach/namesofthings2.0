import { SpinnerProps } from '@utils/types'
import { IconSelector } from '@components/utility'

export const Spinner = ({
  className,
  componentId,
  size = 3,
  testId,
}: SpinnerProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`spinner${className ? ` ${className}` : ''}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <IconSelector icon="SpinnerGap" size={size} />
    </div>
  )
}
