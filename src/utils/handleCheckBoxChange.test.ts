import {
  checkboxArray,
  handleCheckBoxChange,
} from '@utils/handleCheckBoxChange'
import { FormDataProps, SetFormDataProps } from '@utils/types'

describe('handleCheckBoxChange', () => {
  let formData: FormDataProps
  let setFormData: SetFormDataProps

  beforeEach(() => {
    formData = {}
    setFormData = jest.fn()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should update formData with checked checkboxes', () => {
    const e = {
      target: {
        parentElement: {
          parentElement: {
            parentElement: {
              parentElement: {
                parentElement: {
                  id: 'testId',
                  querySelector: jest.fn().mockReturnValue({
                    innerText: 'Test Label',
                  }),
                },
              },
            },
          },
        },
      },
    }

    document.getElementById = jest.fn().mockReturnValue({
      querySelectorAll: jest
        .fn()
        .mockReturnValue([
          { previousElementSibling: { innerText: 'Option 1' } },
          { previousElementSibling: { innerText: 'Option 2' } },
        ]),
    })

    handleCheckBoxChange(e, formData, setFormData)

    expect(setFormData).toHaveBeenCalledWith({
      'Test Label': ['Option 1', 'Option 2'],
    })
  })
})

describe('checkboxArray', () => {
  it('should return an array of checked checkbox labels', () => {
    document.getElementById = jest.fn().mockReturnValue({
      querySelectorAll: jest
        .fn()
        .mockReturnValue([
          { previousElementSibling: { innerText: 'Option 1' } },
          { previousElementSibling: { innerText: 'Option 2' } },
        ]),
    })

    const result = checkboxArray('testId')

    expect(result).toEqual(['Option 1', 'Option 2'])
  })

  it('should return an empty array when no checkboxes are checked', () => {
    document.getElementById = jest.fn().mockReturnValue({
      querySelectorAll: jest.fn().mockReturnValue([]),
    })

    const result = checkboxArray('testId')

    expect(result).toEqual([])
  })

  it('should return undefined when the element with the given id is not found', () => {
    document.getElementById = jest.fn().mockReturnValue(null)

    const result = checkboxArray('nonExistentId')

    expect(result).toBeUndefined()
  })
})
