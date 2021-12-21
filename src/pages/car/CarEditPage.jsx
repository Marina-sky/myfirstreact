import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCarStore } from "../../common/contexts";
import { useCarMakeStore } from "../../common/contexts";

const CarEditPage = () => {
  const [error, setError] = useState("");
  const { carId } = useParams();
  const carStore = useCarStore();
  const carMakeStore = useCarMakeStore();
  let navigate = useNavigate();

  const currentCar = carStore.cars.find((car) => car.id === Number(carId));

  const [newMake, setNewMake] = useState(currentCar ? currentCar.make : "");
  const [newModel, setNewModel] = useState(currentCar ? currentCar.model : "");

  if (!currentCar) {
    return (
      <div>
        <p>No car with this ID</p>
        <Link to="/makes">Back</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMake && newModel) {
      carStore.editCarMake(Number(carId), newMake, newModel);
      navigate("/cars");
    } else {
      setError("Both fields are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit car</h2>
      <label>Make</label>
      <select
        className="u-full-width"
        value={newMake}
        name="make"
        onChange={(event) => {
          setNewMake(event.target.value);
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
        value={newModel}
        name="model"
        onChange={(event) => {
          setNewModel(event.target.value);
          setError("");
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <button className="button-primary" type="submit">
          Edit car
        </button>
        <Link to="/cars" className="button">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default observer(CarEditPage);
