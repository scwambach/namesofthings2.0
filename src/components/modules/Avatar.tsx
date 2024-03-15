import { Badge, ImageObject } from '@components/modules'
import { AvatarProps } from '@utils/types'

const getFirstLetters = (firstName: string, lastName: string) => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}

export const Avatar = ({
  badge,
  className,
  componentId,
  firstName,
  image,
  lastName,
  size = 5,
  testId,
}: AvatarProps) => {
  return (
    <div
      id={componentId}
      data-testid={testId}
      title={`${firstName} ${lastName}`}
      style={{
        height: `${size}rem`,
        width: `${size}rem`,
      }}
      className={`avatar${className ? ` ${className}` : ''}`}
    >
      {!image && (
        <span
          style={{
            fontSize: `${size / 3 + 0.5}rem`,
          }}
        >
          {getFirstLetters(firstName, lastName)}
        </span>
      )}
      {image && (
        <ImageObject {...image} alt={`${firstName} ${lastName}`} isBackground />
      )}
      <div className="srOnly">
        <span>{firstName}</span>
        <span>{lastName}</span>
      </div>
      {badge && badge.number > 0 && <Badge {...badge} />}
    </div>
  )
}
