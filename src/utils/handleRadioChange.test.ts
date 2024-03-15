import { handleRadioChange } from '@utils/handleRadioChange'
import { FormDataProps, SetFormDataProps } from '@utils/types'

describe('handleRadioChange', () => {
  let formData: FormDataProps
  let setFormData: SetFormDataProps

  beforeEach(() => {
    formData = {}
    setFormData = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should update formData with selected radio choice', () => {
    const e = {
      target: {
        previousElementSibling: { innerText: 'Choice 1' },
        parentElement: {
          parentElement: {
            parentElement: {
              parentElement: {
                parentElement: {
                  querySelector: jest
                    .fn()
                    .mockReturnValue({ innerText: 'Test Label' }),
                },
              },
            },
          },
        },
      },
    }

    handleRadioChange(e, formData, setFormData)

    expect(setFormData).toHaveBeenCalledWith({
      'Test Label': 'Choice 1',
    })
  })
})
