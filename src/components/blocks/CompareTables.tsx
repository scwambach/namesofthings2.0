import { CompareTable, SectionHeading } from '@components/modules'
import { Container, Flex } from '@components/utility'
import { CompareTablesProps } from '@utils/types'

// TODO: Create CompareTables tests and stories

export const CompareTables = ({
  className,
  testId,
  componentId,
  heading,
  subheading,
  level,
  items,
  overallTheme,
}: CompareTablesProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`compareTables${className ? ` ${className}` : ''}`}
    >
      <Container containerClass="narrow">
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Flex
          gap="sm"
          alignItems="center"
          columnBreak="lg"
          justifyContent="center"
          fill
        >
          {items.map((item) => (
            <CompareTable
              {...item}
              key={item._key}
              theme={overallTheme || item.theme}
            />
          ))}
        </Flex>
      </Container>
    </div>
  )
}
