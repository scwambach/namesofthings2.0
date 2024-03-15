'use client'
import { slugify } from '@utils/slugify'
import ReactSelect from 'react-select'
import { CaretDown, CheckSquare, RadioButton } from '@phosphor-icons/react'
import { FieldProps } from '@utils/types'
import { Flex, Grid, Markdown, IconSelector } from '@components/utility'
import { bodyFont, headingFont } from '@utils/fonts'

const Label = ({
  label,
  description,
}: {
  label: string
  description?: string
}) => {
  return (
    <Flex direction="column" gap="micro">
      <span
        className={`label ${headingFont.className}`}
        dangerouslySetInnerHTML={{
          __html: label,
        }}
      />
      {description && <Markdown>{description}</Markdown>}
    </Flex>
  )
}

export const FormField = ({
  choiceGridColumns = 4,
  choices,
  className,
  defaultValue,
  description,
  disabled,
  id,
  label,
  multiChoices,
  onChange,
  onChangeArea,
  onChangeSelect,
  placeholder,
  readOnly,
  required,
  testId,
  type,
  value,
}: FieldProps) => {
  const fieldId = `${label ? slugify(label) : 'input'}_${id}`
  const fieldArgs = {
    name: fieldId,
    id: fieldId,
    disabled,
    required,
    readOnly,
    value,
    defaultValue,
    placeholder,
  }
  return (
    <>
      {type === 'textarea' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <textarea
              {...fieldArgs}
              rows={4}
              onChange={onChangeArea}
              className={bodyFont.className}
            />
          </Flex>
        </label>
      ) : type === 'select' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <select
              {...fieldArgs}
              onChange={onChangeSelect}
              className={bodyFont.className}
            >
              {choices?.map((choice) => (
                <option key={choice.id} value={choice.value}>
                  {choice.copy}
                </option>
              ))}
            </select>
            <CaretDown size={16} weight="bold" />
          </Flex>
        </label>
      ) : type === 'checkbox' || type === 'radio' ? (
        <div
          data-testid={testId}
          id={
            type === 'checkbox'
              ? `checkbox_${slugify(label)}_${id}`
              : `radio_${slugify(label)}_${id}`
          }
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <Grid columns={choiceGridColumns} gap="xxs" className="choices">
              {choices?.map((choice) => (
                <label
                  key={choice.id}
                  htmlFor={`${type}_${slugify(choice.copy)}_${choice.id}`}
                  className={`choice${choice.disabled ? ' disabled' : ''}`}
                >
                  <Flex direction="row-reverse" alignItems="center" gap="micro">
                    <span
                      className={bodyFont.className}
                      dangerouslySetInnerHTML={{
                        __html: choice.copy,
                      }}
                    />
                    <input
                      className={bodyFont.className}
                      type={type}
                      onFocus={(e) => {
                        if (e.target.parentElement) {
                          e.target.parentElement.classList.add('focused')
                        }
                      }}
                      onBlur={(e) => {
                        if (e.target.parentElement) {
                          e.target.parentElement.classList.remove('focused')
                        }
                      }}
                      onChange={onChange}
                      disabled={choice.disabled}
                      id={`${type}_${slugify(choice.copy)}_${choice.id}`}
                      name={fieldId}
                    />
                    <div className={`${type}-indicator`}>
                      {type === 'radio' && (
                        <RadioButton size={20} weight="fill" />
                      )}
                      {type === 'checkbox' && (
                        <CheckSquare size={20} weight="fill" />
                      )}
                    </div>
                  </Flex>
                </label>
              ))}
            </Grid>
          </Flex>
        </div>
      ) : type === 'multiselect' ? (
        <label
          data-testid={testId}
          className={`formField${className ? ` ${className}` : ''} ${type}`}
          htmlFor={fieldId}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <ReactSelect
              isMulti
              onFocus={(e) => {
                if (e.target.parentElement) {
                  e.target.parentElement.parentElement?.parentElement?.parentElement?.classList.add(
                    'focused'
                  )
                }
              }}
              onBlur={(e) => {
                if (e.target.parentElement) {
                  e.target.parentElement.parentElement?.parentElement?.parentElement?.classList.remove(
                    'focused'
                  )
                }
              }}
              options={multiChoices}
              name={fieldId}
              className={bodyFont.className}
            />
          </Flex>
        </label>
      ) : type === 'file' ? (
        <label
          data-testid={testId}
          htmlFor={fieldId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <input {...fieldArgs} type={type} onChange={onChange} />
            <Flex
              direction="column"
              gap="micro"
              justifyContent="center"
              className="dropzone"
              alignItems="center"
            >
              <IconSelector icon="Upload" size={20} />
              <span>Click Here</span>
            </Flex>
          </Flex>
        </label>
      ) : (
        <label
          data-testid={testId}
          htmlFor={fieldId}
          className={`formField${className ? ` ${className}` : ''} ${type}${
            disabled ? ' disabled' : ''
          }`}
        >
          <Flex direction="column" gap="xxs">
            <Label label={label} description={description} />
            <input {...fieldArgs} type={type} onChange={onChange} />
            {type === 'search' && (
              <IconSelector icon="MagnifyingGlass" size={20} weight="bold" />
            )}
          </Flex>
        </label>
      )}
    </>
  )
}
