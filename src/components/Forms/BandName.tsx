import { Form } from '@components/blocks'
import { FormField } from '@components/modules'
import { Flex, Grid } from '@components/utility'
import { FormProps } from '@utils/types'
import { genres } from '@data/genres.json'

interface BandNameProps extends FormProps {}

export const BandName = ({
  className,
  testId,
  componentId,
  ...props
}: BandNameProps) => {
  return (
    <Form
      {...props}
      componentId={componentId}
      data-testid={testId}
      className={`contact${className ? ` ${className}` : ''}`}
    >
      <Flex fill direction="column" gap="xxs">
        <Grid columns={2} gap="sm">
          <FormField type="text" id="band-name" label="Band Name" required />
          <FormField type="select" id="genre" label="Genre" choices={genres} />
        </Grid>
        <FormField
          type="text"
          id="noteable-album"
          label="Most Noteable Album Title"
        />
        <FormField type="textarea" id="description" label="Description" />
      </Flex>
    </Form>
  )
}
