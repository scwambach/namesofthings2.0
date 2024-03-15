'use client'
import * as Icon from '@phosphor-icons/react'
import { IconSelectorProps } from '@utils/types'
import { ComponentType } from 'react'

export const IconSelector = ({
  alt,
  className,
  color,
  componentId,
  icon,
  mirrored,
  size,
  testId,
  weight,
}: IconSelectorProps) => {
  const IconComponent = Icon[icon] as ComponentType<Icon.IconProps>

  const phosphorProps = {
    alt,
    className,
    color,
    id: componentId,
    mirrored,
    size,
    'test-id': testId,
    weight,
  }

  return <IconComponent {...phosphorProps} />
}
