import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import Button from './Button'

class Table extends React.Component {
  render() {
    const { resource, name, headings, data, onDelete } = this.props
    return (
      <table>
        <thead>
          <tr>
            {headings.map((heading) => (
              <th key={heading}>{heading}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((r) => (
              <tr key={r.join()}>
                {r.map((d) => (
                  <td key={d}>{d}</td>
                ))}
                <td className="space-x-2 not-prose">
                  <Button
                    variant="danger"
                    type="button"
                    onClick={() => onDelete(r[0])}
                  >
                    Delete
                  </Button>
                  <Button
                    as={Link}
                    variant="white"
                    to={`/${resource}/edit/${r[0]}`}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headings.length + 1}>No {name} found</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }
}

export default observer(Table)
