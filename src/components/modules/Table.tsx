import { headingFont } from '@utils/fonts'
import { TableProps } from '@utils/types'

export const Table = ({
  className,
  componentId,
  controlCell,
  headingRow,
  rows,
}: TableProps) => {
  return (
    <table
      id={componentId}
      className={`table${className ? ` ${className}` : ''}`}
    >
      {headingRow && headingRow.length > 0 && (
        <thead className={headingFont.className}>
          <tr>
            {headingRow.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={`row${index}${row.cells[0]}`}>
            {row.cells.map((cell) => (
              <td key={cell}>{cell}</td>
            ))}
            {controlCell && <td>{controlCell}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
