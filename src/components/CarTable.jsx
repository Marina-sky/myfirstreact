import React from "react";
import { observer } from "mobx-react-lite";

const CarTable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.store.cars.length > 0 ? (
          props.store.cars.map((car) => {
            const { id, make, model } = car;
            return (
              <tr>
                <td>{id}</td>
                <td>{make}</td>
                <td>{model}</td>
                <td>
                  <button onClick={() => props.store.deleteCar(id)}>Delete</button>
                  <button onClick={() => props.editCar(id, car)}>Edit</button>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={4}>No cars found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default observer(CarTable);
