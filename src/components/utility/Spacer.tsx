import { SpacerProps } from '@utils/types'

export const Spacer = ({
  className,
  componentId,
  divide,
  size,
  testId,
}: SpacerProps) => {
  return (
    <div
      data-testid={testId}
      id={componentId}
      className={`spacer${className ? ` ${className}` : ''}`}
      style={{
        padding: `${size}rem 0 ${size}rem 0`,
      }}
    >
      {divide && <hr />}
    </div>
  )
}
