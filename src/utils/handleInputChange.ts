import { FormDataProps, SetFormDataProps } from './types'

export const handleInputChange = (
  e: any,
  formData: FormDataProps,
  setFormData: SetFormDataProps
) => {
  const inputElement = e.target
  const labelText = inputElement.labels[0].innerText
  setFormData({ ...formData, [labelText]: e.target.value })
}
