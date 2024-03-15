import { FormDataProps, SetFormDataProps } from './types'

export const handleFileChange = (
  e: any,
  formData: FormDataProps,
  setFormData: SetFormDataProps
) => {
  const inputElement = e.target
  const labelText = inputElement.previousElementSibling.innerText

  setFormData({
    ...formData,
    [labelText]: {
      name: e.target.files?.item(0).name,
      lastModified: e.target.files?.item(0).lastModified,
      lastModifiedDate: e.target.files?.item(0).lastModifiedDate,
      size: e.target.files?.item(0).size,
      type: e.target.files?.item(0).type,
      webkitRelativePath: e.target.files?.item(0).webkitRelativePath,
    },
  })
}
