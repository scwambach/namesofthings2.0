'use client'
import { LinkObject, SectionHeading } from '@components/modules'
import { Container, Flex, Heading } from '@components/utility'
import { ContactBlockProps } from '@utils/types'
import { Map } from './Map'

// TODO: Create ContactBlock tests and stories

export const ContactBlock = ({
  className,
  testId,
  componentId,
  heading,
  subheading,
  marker,
  level,
  info,
  container,
}: ContactBlockProps) => {
  return (
    <section
      id={componentId}
      data-testid={testId}
      className={`contactBlock${className ? ` ${className}` : ''}`}
    >
      <Container containerClass={container}>
        <Flex fill gap="md" alignItems="center" justifyContent="center">
          {(heading || subheading) && (
            <div>
              <SectionHeading
                heading={heading}
                subheading={subheading}
                level={level}
              />
              <Flex className="infoBox" direction="column" gap="sm">
                {info.address && (
                  <div>
                    <Heading nonHeadingElement="p">Get Directions:</Heading>
                    <LinkObject
                      href={`https://www.google.com/maps/place/${info.address?.street}+${info.address?.city}+${info.address?.state}+${info.address?.zip}/`}
                    >
                      {`${info.address?.street}, ${info.address?.city}, ${info.address?.state} ${info.address?.zip}`}
                    </LinkObject>
                  </div>
                )}
                {info.phone && (
                  <div>
                    <Heading nonHeadingElement="p">Phone:</Heading>
                    <LinkObject href={`tel:${info.phone}`}>
                      {info.phone}
                    </LinkObject>
                  </div>
                )}
                {info.email && (
                  <div>
                    <Heading nonHeadingElement="p">Email:</Heading>
                    <LinkObject href={`mailto:${info.email}`}>
                      {info.email}
                    </LinkObject>
                  </div>
                )}
                {info.hours && (
                  <div>
                    <Heading nonHeadingElement="p">Hours:</Heading>

                    <Flex
                      direction="column"
                      gap="micro"
                      className="unstyled"
                      elementTag="ul"
                    >
                      {info.hours.map((hour, index) => (
                        <li key={index}>
                          <strong>{hour.days}:</strong> {hour.hours}
                        </li>
                      ))}
                    </Flex>
                  </div>
                )}
              </Flex>
            </div>
          )}
          {marker && <Map markers={[marker]} />}
        </Flex>
      </Container>
    </section>
  )
}
