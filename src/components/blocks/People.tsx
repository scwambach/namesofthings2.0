import { Person } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container, Grid } from '@components/utility'
import { PeopleProps } from '@utils/types'

export const People = ({
  className,
  columns = 3,
  componentId,
  container,
  gap = 'sm',
  heading,
  items,
  level = 3,
  subheading,
  testId,
}: PeopleProps) => {
  const renderedPeople = items.map((item, index) => {
    return <Person key={index} {...item} />
  })

  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`people${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        <Grid columns={columns} gap={gap}>
          {renderedPeople}
        </Grid>
      </Container>
    </section>
  )
}
