import { ContainerProps } from '@utils/types'

export const Container = ({
  children,
  className,
  componentId,
  containerClass,
  padded,
  testId,
}: ContainerProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`container${padded ? ` padded` : ''}${
        containerClass ? ` ${containerClass}` : ''
      }${className ? ` ${className}` : ''}`}
    >
      {children}
    </div>
  )
}
