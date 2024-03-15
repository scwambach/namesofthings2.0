export const toUsCurrency = (val: number, decimals?: boolean) => {
  if (decimals)
    return val.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    } as any)

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(val)
}
