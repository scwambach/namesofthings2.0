import { FormDataProps, SetFormDataProps } from './types'

export const handleRadioChange = (
  e: any,
  formData: FormDataProps,
  setFormData: SetFormDataProps
) => {
  const inputElement = e.target
  const parentElement =
    inputElement.parentElement.parentElement.parentElement.parentElement
      .parentElement
  const labelText = parentElement.querySelector('span.label')?.innerText
  const choiceLabel = inputElement.previousElementSibling.innerText

  setFormData({
    ...formData,
    [labelText]: choiceLabel,
  })
}
