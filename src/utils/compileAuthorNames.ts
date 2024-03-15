import { PersonProps } from './types'

export const compileAuthorNames = (authors: PersonProps[]) => {
  const names = authors.map(
    (author) => `${author.firstName} ${author.lastName}`
  )
  const lastName = names.pop()

  if (names.length === 0) {
    return lastName
  }

  if (names.length === 1) {
    return `${names[0]} and ${lastName}`
  }
  return `${names.join(', ')}, and ${lastName}`
}
