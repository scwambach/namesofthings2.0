import { FormField } from '../../components/modules/FormField'
import { Form as FormItem } from '@components/blocks/Form'
import { Grid } from '@components/utility'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof FormItem> = {
  title: 'Components/Blocks',
  component: FormItem,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormItem>

export const Form: Story = {
  args: {
    heading: 'Contact Us',
    subheading: 'Please fill out the form below',
    submitCopy: 'Submit the form',
    children: (
      <Grid columns={2} gap="md">
        <FormField id="input 1" label="Text Input" type="text" />
        <FormField id="input 2" label="Email Input" type="email" />
        <FormField id="input 3" label="Password Input" type="password" />
        <FormField
          id="input 4"
          label="Checkbox"
          type="checkbox"
          choices={[
            {
              id: 'choice-1',
              copy: 'Choice 1',
              value: 'choice-1',
            },
            {
              id: 'choice-2',
              copy: 'Choice 2',
              value: 'choice-2',
            },
          ]}
        />
        <FormField
          id="input 5"
          label="Radio"
          type="radio"
          choices={[
            {
              id: 'choice-1',
              copy: 'Choice 1',
              value: 'choice-1',
            },
            {
              id: 'choice-2',
              copy: 'Choice 2',
              value: 'choice-2',
            },
          ]}
        />
        <FormField
          id="input 6"
          label="Select"
          type="select"
          choices={[
            {
              id: 'choice-1',
              copy: 'Choice 1',
              value: 'choice-1',
            },
            {
              id: 'choice-2',
              copy: 'Choice 2',
              value: 'choice-2',
            },
          ]}
        />
        <FormField id="input 7" label="Textarea" type="textarea" />
        <FormField id="input 8" label="File Input" type="file" />
        <FormField
          id="input 9"
          label="Multi Select"
          type="multiselect"
          multiChoices={[
            {
              label: 'Choice 1',
              value: 'choice-1',
            },
            {
              label: 'Choice 2',
              value: 'choice-2',
            },
            {
              label: 'Choice 3',
              value: 'choice-3',
            },
          ]}
        />
        <FormField id="input 10" label="Date Input" type="date" />
        <FormField id="input 11" label="Time Input" type="time" />
        <FormField id="input 12" label="Datetime Input" type="datetime-local" />
      </Grid>
    ),
  },
}
