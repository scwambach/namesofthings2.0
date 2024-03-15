'use client'
import { Button } from '@components/modules'
import { IconSelector } from '@components/utility'
import { AlertProps } from '@utils/types'
import { useEffect, useState } from 'react'
import * as Icon from '@phosphor-icons/react'
import { parseMarkdownToHTML } from '@utils/parseMarkdownToHTML'

export const Alert = ({
  type,
  testId,
  className,
  componentId,
  message,
}: AlertProps) => {
  const [remove, setRemove] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!componentId) {
      setLoading(false)
      return
    }

    if (sessionStorage.getItem(`alert_${componentId}`)) {
      setRemove(true)
    }

    if (remove) {
      sessionStorage.setItem(`alert_${componentId}`, 'true')
    }

    setLoading(false)
  }, [remove])

  const iconMap = {
    success: 'Confetti',
    warning: 'Warning',
    error: 'XCircle',
    info: 'Info',
  }

  return (
    <div
      data-testid={testId}
      id={componentId}
      className={`alert ${type}${className ? ` ${className}` : ''}${
        loading || remove ? ' hide' : ''
      }`}
    >
      <IconSelector
        icon={iconMap[type] as keyof typeof Icon}
        weight="fill"
        size={30}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: parseMarkdownToHTML(message),
        }}
      />
      {componentId && (
        <Button
          type="button"
          unstyled
          testId="closeButton"
          onClick={() => {
            sessionStorage.setItem(`alert_${componentId}`, 'true')
            setRemove(true)
          }}
        >
          <IconSelector icon="X" size={18} />
        </Button>
      )}
    </div>
  )
}
