import { addCommas } from './addCommas'

export const maxPlus = (num: number, maxNumber: number) => {
  if (num > maxNumber) {
    return `${addCommas(maxNumber)}+`
  }
  return addCommas(num)
}
