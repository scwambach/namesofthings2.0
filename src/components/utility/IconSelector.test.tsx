import { IconSelector } from './IconSelector'
import { render } from '@testing-library/react'

describe('IconSelector', () => {
  it('renders the icon', () => {
    const icon = 'Airplane'
    const { container } = render(<IconSelector icon={icon} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
