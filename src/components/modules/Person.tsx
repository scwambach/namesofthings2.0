import { PersonProps } from '@utils/types'
import * as Icon from '@phosphor-icons/react'
import { IconSelector, Flex, Box } from '@components/utility'
import { LinkObject, ImageObject } from '@components/modules'
import { headingFont } from '@utils/fonts'

export const Person = ({
  className,
  company,
  componentId,
  firstName,
  image,
  lastName,
  socials,
  testId,
  title,
}: PersonProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      className={`person${className ? ` ${className}` : ''}`}
    >
      <Flex direction="column" gap="xxs" alignItems="stretch">
        <Box overflow className="image">
          <ImageObject {...image} isBackground />
        </Box>
        <p className={headingFont.className}>
          {firstName} {lastName}
        </p>
        {title && (
          <p>
            {title}
            <>
              {' '}
              {company && (
                <>
                  <span> @ {company}</span>
                </>
              )}
            </>
          </p>
        )}

        {socials && (
          <Flex
            columnBreak="none"
            elementTag="ul"
            className="unstyled"
            gap="micro"
          >
            {socials.map((social, index) => (
              <li key={index}>
                <LinkObject href={social.href} ariaLabel={social.screenReader}>
                  <IconSelector
                    icon={social.icon as keyof typeof Icon}
                    weight="fill"
                    size={24}
                  />
                </LinkObject>
              </li>
            ))}
          </Flex>
        )}
      </Flex>
    </div>
  )
}
