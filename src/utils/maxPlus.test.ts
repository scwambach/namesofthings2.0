import { maxPlus } from './maxPlus'

describe('maxPlus', () => {
  it('returns maxNumber with a plus sign when num is greater than maxNumber', () => {
    expect(maxPlus(100, 50)).toBe('50+')
    expect(maxPlus(1000, 500)).toBe('500+')
  })

  it('returns maxNumber without a plus sign when num is equal to maxNumber', () => {
    expect(maxPlus(50, 50)).toBe('50')
    expect(maxPlus(500, 500)).toBe('500')
  })

  it('returns num with commas when num is less than maxNumber', () => {
    expect(maxPlus(50, 100)).toBe('50')
    expect(maxPlus(500, 1000)).toBe('500')
  })

  it('handles large numbers', () => {
    expect(maxPlus(123456789, 1000000)).toBe('1,000,000+')
    expect(maxPlus(9876543210, 1000000000)).toBe('1,000,000,000+')
  })
})
