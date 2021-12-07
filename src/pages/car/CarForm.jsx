import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useCarMakeStore } from "../../common/contexts";

const CarForm = (props) => {
  const carMakeStore = useCarMakeStore();

  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carMake && carModel) {
      props.store.createCar({ 
        make: carMake,
        model: carModel
       });
      setCarMake("");
      setCarModel("");
    } else {
      setError("Both fields are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add car</h2>
      <label>Make</label>
      <select
        className="u-full-width"
        value={carMake}
        name="make"
        onChange={(event) => {
          setCarMake(event.target.value);
          setError("");
        }}
      >
        <option value="">-- select --</option>
        {carMakeStore.carMakes.map((mt) => {
          const { id, name } = mt;
          return (
            <option key={id} value={name}>
              {name}
            </option>
          );
        })}
      </select>
      <label>Model</label>
      <input
        className="u-full-width"
        type="text"
        value={carModel}
        name="model"
        onChange={(event) => {
          setCarModel(event.target.value);
          setError("");
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <button className="button-primary" type="submit">
          Add car
        </button>
      </div>
    </form>
  );
};

export default observer(CarForm);
