import React from "react";
import { observer } from "mobx-react-lite";

const CarMakeTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.store.carsMake.length > 0 ? (
          props.store.carsMake.map((carMake) => {
            const { id, name} = carMake;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>
                  <button onClick={() => props.store.deleteCarMake(id)}>
                    Delete
                  </button>
                  <button onClick={() => props.editCarMake(id, carMake)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No cars make found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default observer(CarMakeTable);
