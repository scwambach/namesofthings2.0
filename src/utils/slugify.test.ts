import { slugify } from './slugify'

describe('slugify', () => {
  it('correctly transforms a string into a slug', () => {
    const input = 'This is a Test'
    const expectedOutput = 'this-is-a-test'
    expect(slugify(input)).toBe(expectedOutput)
  })

  it('correctly handles special characters and accents', () => {
    const input = 'ÁäàãåčçćĎéěëèêẽĕȇíìîïňñóöòôõøřšťúůüùûýÿžþđßÆa·/_,:;'
    const expectedOutput = 'aaaaacccdeeeeeeeeiiiinnoooooorstuuuuuyyzbda-'
    expect(slugify(input)).toBe(expectedOutput)
  })

  it('returns undefined for empty string', () => {
    const input = ''
    expect(slugify(input)).toBeUndefined()
  })

  it('returns undefined for string containing only whitespace', () => {
    const input = '   '
    expect(slugify(input)).toBe('')
  })
})
