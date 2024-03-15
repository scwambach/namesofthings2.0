import { convertTime } from './convertTime'

describe('convertTime function', () => {
  it('should convert a time string to a Date object', () => {
    const timeString = '14:30'
    const expectedDate = new Date()
    expectedDate.setHours(14)
    expectedDate.setMinutes(30)

    const result = convertTime(timeString)

    expect(result.getHours()).toBe(expectedDate.getHours())
    expect(result.getMinutes()).toBe(expectedDate.getMinutes())
  })

  it('should handle midnight correctly', () => {
    const timeString = '00:00'
    const expectedDate = new Date()
    expectedDate.setHours(0)
    expectedDate.setMinutes(0)

    const result = convertTime(timeString)

    expect(result.getHours()).toBe(expectedDate.getHours())
    expect(result.getMinutes()).toBe(expectedDate.getMinutes())
  })

  it('should handle noon correctly', () => {
    const timeString = '12:00'
    const expectedDate = new Date()
    expectedDate.setHours(12)
    expectedDate.setMinutes(0)

    const result = convertTime(timeString)

    expect(result.getHours()).toBe(expectedDate.getHours())
    expect(result.getMinutes()).toBe(expectedDate.getMinutes())
  })

  it('should handle leading zeros correctly', () => {
    const timeString = '09:05'
    const expectedDate = new Date()
    expectedDate.setHours(9)
    expectedDate.setMinutes(5)

    const result = convertTime(timeString)

    expect(result.getHours()).toBe(expectedDate.getHours())
    expect(result.getMinutes()).toBe(expectedDate.getMinutes())
  })
})
