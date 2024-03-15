export const convertTime = (time: string) => {
  const [hours, minutes] = time.split(':')
  const date = new Date()
  date.setHours(parseInt(hours, 10))
  date.setMinutes(parseInt(minutes, 10))
  return date
}
