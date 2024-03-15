import { Button, SectionHeading } from '@components/modules'
import { Container, Flex } from '@components/utility'
import { ButtonRowProps } from '@utils/types'

// TODO: Create ButtonRow tests and stories

export const ButtonRow = ({
  className,
  componentId,
  heading,
  items,
  level,
  subheading,
  testId,
}: ButtonRowProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`buttonRow${className ? ` ${className}` : ''}`}
    >
      <Container>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Flex gap="xs" justifyContent="center" alignItems="center">
          {items.map((item) => (
            <Button key={item._key} {...item} />
          ))}
        </Flex>
      </Container>
    </div>
  )
}
