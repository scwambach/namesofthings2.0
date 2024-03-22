import { BlockProps } from '@utils/types'
import * as FormComponent from '@components/Forms'
import { ComponentType } from 'react'

interface FormSelectorProps extends BlockProps {
  name: string
}

export const FormSelector = ({ name, ...props }: FormSelectorProps) => {
  const FormObject = FormComponent[
    name as keyof typeof FormComponent
  ] as ComponentType<BlockProps>

  return <FormObject {...props} />
}
