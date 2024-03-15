import { FormDataProps, SetFormDataProps } from './types'

export const checkboxArray = (id: string) => {
  const thisObject = document.getElementById(id)
  if (!thisObject) return
  const allChecked = Array.from(
    thisObject.querySelectorAll('input[type="checkbox"]:checked')
  ).map((el: any) => {
    const span = el.previousElementSibling
    const spanText = span?.innerText

    return spanText
  })

  return allChecked
}

export const handleCheckBoxChange = (
  e: any,
  formData: FormDataProps,
  setFormData: SetFormDataProps
) => {
  const inputElement = e.target
  const parentElement =
    inputElement.parentElement.parentElement.parentElement.parentElement
      .parentElement
  const labelText = parentElement.querySelector('span.label')?.innerText

  setFormData({
    ...formData,
    [labelText]: checkboxArray(parentElement.id),
  })
}
