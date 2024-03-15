import { fireEvent, render } from '@testing-library/react'
import { SkipToMain } from './SkipToMain'

describe('SkipToMain Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <>
        <SkipToMain />
        <div id="bodyContent" tabIndex={-1} />
      </>
    )
    expect(container).toBeInTheDocument()
  })

  it('renders the "Skip to main content" button', () => {
    const { getByText } = render(
      <>
        <SkipToMain />
        <div id="bodyContent" tabIndex={-1} />
      </>
    )
    expect(getByText('Skip to main content')).toBeInTheDocument()
  })

  it('focuses on the main content when clicked', () => {
    const { getByText } = render(
      <>
        <SkipToMain />
        <div id="bodyContent" tabIndex={-1} />
      </>
    )
    const button = getByText('Skip to main content')
    const main = document.getElementById('bodyContent')
    fireEvent.click(button)

    expect(main).toHaveFocus()
  })
})
