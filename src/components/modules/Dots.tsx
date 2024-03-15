import { DotsProps } from '@utils/types'
import { Button } from '@components/modules'
import { Flex, IconSelector } from '@components/utility'

export const Dots = ({
  activeIndex,
  className,
  componentId,
  count,
  setActiveIndex,
}: DotsProps) => {
  return (
    <div id={componentId} className={`dots${className ? ` ${className}` : ''}`}>
      <Flex gap="xxs" justifyContent="center" noBreak>
        {Array.from({ length: count }, (_, i) => (
          <Button
            type="button"
            unstyled
            key={i}
            onClick={() => setActiveIndex(i)}
          >
            <IconSelector
              icon={i === activeIndex ? 'DotOutline' : 'Dot'}
              size={40}
            />
          </Button>
        ))}
      </Flex>
    </div>
  )
}
