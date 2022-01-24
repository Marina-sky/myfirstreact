import React from "react";
import { observer } from "mobx-react";
import { Link } from 'react-router-dom'

const Table = ({ name, headings, data, onDelete }) => {
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
              <td>
                <button onClick={() => onDelete(r[0])}>Delete</button>
                <Link to={`edit/${r[0]}`} className="button button-primary">
                  Edit
                </Link>
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
  );
};

export default observer(Table);
