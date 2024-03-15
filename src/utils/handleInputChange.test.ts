import { handleInputChange } from '@utils/handleInputChange'
import { FormDataProps, SetFormDataProps } from '@utils/types'

describe('handleInputChange', () => {
  let formData: FormDataProps
  let setFormData: SetFormDataProps

  beforeEach(() => {
    formData = {}
    setFormData = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should update formData with input value', () => {
    const e = {
      target: {
        labels: [{ innerText: 'Test Label' }],
        value: 'Test Value',
      },
    }

    handleInputChange(e, formData, setFormData)

    expect(setFormData).toHaveBeenCalledWith({
      'Test Label': 'Test Value',
    })
  })
})
