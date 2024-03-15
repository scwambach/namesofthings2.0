import { handleFileChange } from '@utils/handleFileChange'
import { FormDataProps, SetFormDataProps } from '@utils/types'

describe('handleFileChange', () => {
  let formData: FormDataProps
  let setFormData: SetFormDataProps

  beforeEach(() => {
    formData = {}
    setFormData = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should update formData with file data', () => {
    const e = {
      target: {
        previousElementSibling: { innerText: 'Test Label' },
        files: {
          item: jest.fn().mockReturnValue({
            name: 'test.txt',
            lastModified: 1234567890,
            lastModifiedDate: new Date(1234567890000),
            size: 1024,
            type: 'text/plain',
            webkitRelativePath: '/path/to/test.txt',
          }),
        },
      },
    }

    handleFileChange(e, formData, setFormData)

    expect(setFormData).toHaveBeenCalledWith({
      'Test Label': {
        name: 'test.txt',
        lastModified: 1234567890,
        lastModifiedDate: new Date(1234567890000),
        size: 1024,
        type: 'text/plain',
        webkitRelativePath: '/path/to/test.txt',
      },
    })
  })
})
