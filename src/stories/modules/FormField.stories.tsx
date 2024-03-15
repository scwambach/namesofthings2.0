import { FormField as FormFieldItem } from '@components/modules/FormField'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FormFieldItem> = {
  title: 'Components/Modules/FormField',
  component: FormFieldItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormFieldItem>

export const Text: Story = {
  args: {
    label: 'Text',
    type: 'text',
    placeholder: 'Text',
  },
}

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Email',
  },
}

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
  },
}

export const Number: Story = {
  args: {
    label: 'Number',
    type: 'number',
    placeholder: 'Number',
  },
}

export const Date: Story = {
  args: {
    label: 'Date',
    type: 'date',
    placeholder: 'Date',
  },
}

export const Time: Story = {
  args: {
    label: 'Time',
    type: 'time',
    placeholder: 'Time',
  },
}

export const Month: Story = {
  args: {
    label: 'Month',
    type: 'month',
    placeholder: 'Month',
  },
}

export const Week: Story = {
  args: {
    label: 'Week',
    type: 'week',
    placeholder: 'Week',
  },
}

export const Url: Story = {
  args: {
    label: 'Url',
    type: 'url',
    placeholder: 'Url',
  },
}

export const Tel: Story = {
  args: {
    label: 'Tel',
    type: 'tel',
    placeholder: 'Tel',
  },
}

export const Search: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search',
  },
}

export const Color: Story = {
  args: {
    label: 'Color',
    type: 'color',
    placeholder: 'Color',
  },
}

export const File: Story = {
  args: {
    label: 'File',
    type: 'file',
    placeholder: 'File',
  },
}

export const Checkbox: Story = {
  args: {
    label: 'Checkbox',
    type: 'checkbox',
    choices: [
      {
        copy: 'Checkbox 1',
        value: 'checkbox1',
        id: 'checkbox1',
      },
      {
        copy: 'Checkbox 2',
        value: 'checkbox2',
        id: 'checkbox2',
      },
      {
        copy: 'Checkbox 3',
        value: 'checkbox3',
        id: 'checkbox3',
      },
    ],
  },
}

export const Radio: Story = {
  args: {
    label: 'Radio',
    type: 'radio',
    choices: [
      {
        copy: 'Radio 1',
        value: 'radio1',
        id: 'radio1',
      },
      {
        copy: 'Radio 2',
        value: 'radio2',
        id: 'radio2',
      },
      {
        copy: 'Radio 3',
        value: 'radio3',
        id: 'radio3',
      },
    ],
  },
}

export const Textarea: Story = {
  args: {
    label: 'Textarea',
    type: 'textarea',
    placeholder: 'Textarea',
  },
}

export const Select: Story = {
  args: {
    label: 'Select',
    type: 'select',
    choices: [
      {
        copy: 'Select 1',
        value: 'select1',
        id: 'select1',
      },
      {
        copy: 'Select 2',
        value: 'select2',
        id: 'select2',
      },
      {
        copy: 'Select 3',
        value: 'select3',
        id: 'select3',
      },
    ],
  },
}

export const Multiselect: Story = {
  args: {
    label: 'Multiselect',
    type: 'multiselect',
    multiChoices: [
      {
        label: 'Multiselect 1',
        value: 'multiselect1',
      },
      {
        label: 'Multiselect 2',
        value: 'multiselect2',
      },
      {
        label: 'Multiselect 3',
        value: 'multiselect3',
      },
    ],
  },
}
