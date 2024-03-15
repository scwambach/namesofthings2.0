import { repeater } from './repeater'

describe('repeater function', () => {
  it('returns an array of repeated elements', () => {
    const elementToRepeat = <div>Hello</div>
    const repeatCount = 5
    const elements = repeater(repeatCount, elementToRepeat)

    expect(elements).toHaveLength(repeatCount)
    elements.forEach((element, index) => {
      expect(element.type).toBe('div')
      expect(element.props.children).toBe('Hello')
      expect(element.key).toBe(index.toString())
    })
  })

  it('returns an empty array when num is 0', () => {
    const elementToRepeat = <div>Hello</div>
    const repeatCount = 0
    const elements = repeater(repeatCount, elementToRepeat)

    expect(elements).toHaveLength(0)
  })
})
