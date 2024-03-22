'use client'
import { Button } from '@components/modules'
import { SectionHeading } from '@components/modules/SectionHeading'
import { Container } from '@components/utility'
import { FormProps } from '@utils/types'
import { useState } from 'react'

const Form = (props: FormProps) => {
  const {
    children,
    className,
    componentId,
    container,
    formId,
    heading,
    formAction,
    level,
    onSubmit,
    subheading,
    submitCopy,
    testId,
  } = props
  const [formFieldsValues, setFormFieldsValues] = useState<any>({})
  const [formResponse, setFormResponse] = useState<any>(null)

  const handleSubmit = async () => {
    const response = await fetch(formAction || '/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify({
        fields: {
          ...formFieldsValues,
        },
        recipients: 'scott@scottwamba.ch',
        subject: heading || 'Form Submission',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    setFormResponse(data)

    return data
  }
  return (
    <section
      id={componentId}
      className={`form${className ? ` ${className}` : ''}`}
      data-testid={testId}
    >
      <Container containerClass={container}>
        {heading && (
          <SectionHeading
            heading={heading}
            level={level}
            subheading={subheading}
          />
        )}
        {formResponse ? (
          <div className="response">
            {formResponse.status === 200 ? (
              <div className="success">
                <p>Thank you!</p>
              </div>
            ) : (
              <div className="error">
                <p>OH NO!!!</p>
              </div>
            )}
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault()
              onSubmit && onSubmit(e)
              handleSubmit()
            }}
            onChange={() => {
              const form = document.getElementById(formId) as HTMLFormElement
              if (form) {
                const formValues = new FormData(form)
                const values: any = {}
                formValues.forEach((value, key) => {
                  values[key] = value
                })
                setFormFieldsValues(values)
              }
            }}
          >
            <fieldset>{children}</fieldset>
            <Button type="submit">{submitCopy || 'Submit'}</Button>
          </form>
        )}
      </Container>
    </section>
  )
}

export { Form }
