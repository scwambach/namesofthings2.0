import { Heading, IconSelector, Flex, Box } from '@components/utility'
import { Tag } from '@components/modules'
import { addCommas } from '@utils/addCommas'
import { toUsCurrency } from '@utils/toUsCurrency'
import { StatProps } from '@utils/types'

export const Stat = ({
  className,
  componentId,
  decimals,
  icon,
  maxValue,
  numberPrefix,
  numberSuffix,
  subtitle,
  tags,
  testId,
  theme = 'primary',
  title,
  type,
  value,
}: StatProps) => {
  const limitedValue = maxValue ? Math.min(value, maxValue) : value

  const hasExceededMaxValue = maxValue ? value > maxValue : false

  const formattedValue = (val: number) => {
    if (type === 'currency') {
      return toUsCurrency(val, decimals)
    }
    if (type === 'percentage') {
      return `${val}%`
    }
    return addCommas(val)
  }

  return (
    <Box
      componentId={componentId}
      shadow={2}
      className={`stat ${theme}${className ? ` ${className}` : ''}`}
      testId={testId}
    >
      <Flex columnBreak="xxs" gap="xs">
        {icon && (
          <div className="icon">
            <IconSelector icon={icon} size={32} />
          </div>
        )}
        <Flex direction="column" gap="xxs">
          <Heading nonHeadingElement="p" level={6} className="title">
            {title}
          </Heading>

          <div>
            <p className="value">
              {numberPrefix && <span className="prefix">{numberPrefix}</span>}
              <span className="main">
                {`${formattedValue(limitedValue)}`}
                {hasExceededMaxValue && <span>{'+'}</span>}
              </span>
              {numberSuffix && <span className="suffix">{numberSuffix}</span>}
            </p>

            {subtitle && <p>{subtitle}</p>}
          </div>

          {tags && tags.length > 0 && (
            <Flex columnBreak="none" className="tags" gap="micro">
              {tags.map((tag) => (
                <Tag theme={theme} key={tag} label={tag} />
              ))}
            </Flex>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}
