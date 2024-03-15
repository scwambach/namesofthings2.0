'use client'
import { useState } from 'react'
import { Form } from '@components/blocks'
import { FormField } from '@components/modules'
import { Grid } from '@components/utility'
import { ComponentProps } from '@utils/types'
import { handleInputChange } from '@utils/handleInputChange'
import { handleRadioChange } from '@utils/handleRadioChange'
import { handleCheckBoxChange } from '@utils/handleCheckBoxChange'
import { handleFileChange } from '@utils/handleFileChange'

interface ContactFormProps extends ComponentProps {}

export const ContactForm = (props: ContactFormProps) => {
  const [formData, setFormData] = useState<any>({})
  const handleSelectChange = (e: any) => {
    const labelText = e.target.previousElementSibling?.innerHTML as string
    setFormData({ ...formData, [labelText]: e.target.value })
  }

  return (
    <div
      className={`contactForm${props.className ? ` ${props.className}` : ''}`}
    >
      <Form
        submitCopy="GEt it!"
        heading="Ut ultrices finibus aliquet"
        testId="formID"
        subheading="Nunc nunc tortor, viverra id diam non, commodo lobortis elit. In nec finibus justo, in consectetur arcu. Aliquam aliquet egestas."
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <Grid gap="sm" columns={2}>
            <FormField
              id="firstName"
              description="Please enter your first name."
              label="First Name"
              type="text"
              onChange={(e) => handleInputChange(e, formData, setFormData)}
            />
            <FormField
              id="fieldID3"
              label="check-test3"
              type="checkbox"
              onChange={(e) => {
                handleCheckBoxChange(e, formData, setFormData)
              }}
              choices={[
                {
                  copy: 'check 1',
                  value: 'check1',
                  id: 'check1',
                },
                {
                  copy: 'check 2',
                  value: 'check2',
                  id: 'check2',
                },
                {
                  copy: 'check 3',
                  value: 'check3',
                  id: 'check3',
                },
              ]}
            />
            <FormField
              id="fieldID4"
              label="test4"
              type="multiselect"
              onChange={(e) => handleRadioChange(e, formData, setFormData)}
              multiChoices={[
                {
                  label: 'Choice 1',
                  value: 'choice1',
                },
                {
                  label: 'Choice 2',
                  value: 'choice2',
                },
                {
                  label: 'Choice 3',
                  value: 'choice3',
                },
              ]}
            />
            <FormField
              id="fieldID5"
              label="test5"
              type="select"
              onChangeSelect={handleSelectChange}
              choices={[
                { copy: 'Choice 1', value: 'choice1', id: 'choice1' },
                { copy: 'Choice 2', value: 'choice2', id: 'choice2' },
                { copy: 'Choice 3', value: 'choice3', id: 'choice3' },
              ]}
            />
            <FormField
              id="fieldID6"
              label="test6"
              type="file"
              onChange={(e) => {
                handleFileChange(e, formData, setFormData)
              }}
            />
          </Grid>
        </div>
      </Form>
    </div>
  )
}
