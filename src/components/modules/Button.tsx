import { ButtonProps } from '@utils/types'
import { headingFont } from '@utils/fonts'
import { IconSelector } from '@components/utility'
import { LinkObject } from '@components/modules'

export const Button = ({
  ariaControls,
  ariaExpanded,
  ariaLabel,
  children,
  className,
  componentId,
  disabled,
  href,
  icon,
  label,
  onBlur,
  onClick,
  onFocus,
  onMouseOut,
  onMouseOver,
  role = 'button',
  small,
  style,
  suffixIcon,
  testId,
  theme,
  type = 'link',
  unstyled,
}: ButtonProps) => {
  const classList = `button ${
    headingFont.className
  }${theme && !unstyled ? ` ${theme}` : ''}${className ? ` ${className}` : ''}${unstyled ? ' unstyled' : ''}${
    small ? ' small' : ''
  }${disabled ? ' disabled' : ''}`
  return (
    <>
      {type === 'link' && (
        <LinkObject
          href={href || '/'}
          style={style}
          role={role}
          testId={testId}
          className={classList}
          onClick={onClick}
          componentId={componentId}
          onMouseOut={onMouseOut}
          onMouseOver={onMouseOver}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          {icon && (
            <IconSelector
              className="prefix"
              icon={icon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
          {label || children}
          {suffixIcon && (
            <IconSelector
              className="suffix"
              icon={suffixIcon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
        </LinkObject>
      )}
      {type !== 'link' && (
        <button
          type={type}
          data-testid={testId}
          disabled={disabled}
          style={style}
          className={classList}
          onClick={onClick}
          id={componentId}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
          role={role}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
          aria-label={ariaLabel}
        >
          {icon && (
            <IconSelector
              className="prefix"
              icon={icon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
          {label || children}
          {suffixIcon && (
            <IconSelector
              className="suffix"
              icon={suffixIcon}
              weight={unstyled ? 'regular' : 'bold'}
            />
          )}
        </button>
      )}
    </>
  )
}
