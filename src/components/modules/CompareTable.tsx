import { Box, Flex, Heading } from '@components/utility'
import { CompareTableProps } from '@utils/types'
import { Button } from './Button'
import { Check } from '@phosphor-icons/react/dist/ssr'
import { Tag } from './Tag'

// TODO: Create CompareTable tests and stories

export const CompareTable = ({
  className,
  componentId,
  eyebrow,
  heading,
  highlight,
  items,
  link,
  subheading,
  testId,
  tag,
  theme = 'primary',
}: CompareTableProps) => {
  const accent =
    theme === 'primary'
      ? 'tertiary'
      : theme === 'secondary'
        ? 'tertiary'
        : theme === 'tertiary'
          ? 'secondary'
          : 'primary'

  return (
    <Box
      radius={8}
      componentId={componentId}
      data-testid={testId}
      className={`compareTable ${theme}${className ? ` ${className}` : ''}${
        highlight ? ' highlight' : ''
      }`}
    >
      <Flex direction="column" alignItems="center" gap="xxs">
        <Flex gap="micro" direction="column" alignItems="center">
          {highlight && tag && <Tag label={tag} theme={accent} />}
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        </Flex>
        <Heading nonHeadingElement="p">{heading}</Heading>
        {subheading && <p className="subheading">{subheading}</p>}
        <Flex
          direction="column"
          elementTag="ul"
          gap="micro"
          className="unstyled"
        >
          {items.map((item, index) => (
            <Flex
              elementTag="li"
              columnBreak="none"
              key={`${item}-${index}`}
              alignItems="flex-start"
              justifyContent="flex-start"
              gap="micro"
            >
              <Check size={16} />
              {item}
            </Flex>
          ))}
        </Flex>
        {link && <Button {...link} theme={accent} />}
      </Flex>
    </Box>
  )
}
