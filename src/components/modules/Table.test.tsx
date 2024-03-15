import { render } from '@testing-library/react'
import { Table } from './Table'
import { TableProps } from '@utils/types'

describe('Table Component', () => {
  const className = 'custom-table'
  const headingRow = ['Name', 'Age']
  const rows = [{ cells: ['John', 25] }, { cells: ['Alice', 30] }]
  const controlCell = <button>Edit</button>

  const defaultProps: TableProps = {
    className: className,
    headingRow: headingRow,
    rows: rows,
    controlCell: controlCell,
  }

  it('renders without crashing', () => {
    const { container } = render(<Table {...defaultProps} />)
    expect(container).toBeInTheDocument()
  })

  it('renders the heading row correctly', () => {
    const { getByText } = render(<Table {...defaultProps} />)
    headingRow.forEach((cell) => {
      expect(getByText(cell)).toBeInTheDocument()
    })
  })

  it('renders the rows correctly', () => {
    const { getByText } = render(<Table {...defaultProps} />)
    rows.forEach((row) => {
      row.cells.forEach((cell) => {
        expect(getByText(cell.toString())).toBeInTheDocument()
      })
    })
  })

  it('applies provided class name', () => {
    const { container } = render(<Table {...defaultProps} />)
    expect(container.firstChild).toHaveClass(className)
  })

  it('renders the control cell correctly if provided', () => {
    render(<Table {...defaultProps} />)
    const button = document.querySelector('button')
    const buttonText = button?.textContent === 'Edit'
    expect(buttonText).toBeTruthy()
  })
})
