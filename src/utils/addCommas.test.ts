import { addCommas } from './addCommas'

describe('addCommas', () => {
  it('formats numbers with commas for thousands separators', () => {
    expect(addCommas(1000)).toBe('1,000')
    expect(addCommas(1000000)).toBe('1,000,000')
    expect(addCommas(123456789)).toBe('123,456,789')
  })

  it('handles negative numbers', () => {
    expect(addCommas(-1000)).toBe('-1,000')
    expect(addCommas(-1000000)).toBe('-1,000,000')
    expect(addCommas(-123456789)).toBe('-123,456,789')
  })

  it('handles zero', () => {
    expect(addCommas(0)).toBe('0')
  })

  it('handles decimal numbers', () => {
    expect(addCommas(1234.56)).toBe('1,234.56')
    expect(addCommas(-1234.56)).toBe('-1,234.56')
  })

  it('handles large numbers', () => {
    expect(addCommas(1234567890123456)).toBe('1,234,567,890,123,456')
    expect(addCommas(-1234567890123456)).toBe('-1,234,567,890,123,456')
  })
})
