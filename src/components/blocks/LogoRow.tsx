import { ImageObject } from '@components/modules'
import { Flex } from '@components/utility'
import { LogoRowProps } from '@utils/types'

// TODO: Create LogoRow tests and stories

export const LogoRow = ({
  className,
  componentId,
  items,
  testId,
}: LogoRowProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`logoRow${className ? ` ${className}` : ''}`}
    >
      <Flex justifyContent="center" alignItems="center" gap="xl">
        {items.map((item) => {
          return (
            <div key={item.title}>
              <ImageObject {...item.image} alt={item.title} />
              <div className="srOnly">{item.title}</div>
            </div>
          )
        })}
      </Flex>
    </div>
  )
}
