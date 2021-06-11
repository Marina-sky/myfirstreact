import React, { useState, useEffect } from "react";

const CarForm = (props) => {
  useEffect(() => {
    setCar(props.currentCar);
  }, [props]);

  const initCar = { id: null, make: "", model: "" };

  let state;
  if (props.editing === true) {  
    state = props.currentCar;
  } else {
    state = initCar;
    
  }
  const [car, setCar] = useState(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  function handleRequest() {
    if (props.editing === true) {
      props.store.updateCar(car.id, car);
      props.resetCar(car.id, car);
    } else {
      car.id = props.store.cars.length + 1;
      props.store.createCar(car);
      setCar(initCar);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (car.make && car.model) {
      handleRequest();
      document.getElementById("error-message").style.display = "none";
    } else {
      document.getElementById("error-message").innerHTML =
        "All fields are required.";
    }
  };

  return (
    <form>
      <h2>{props.editing ? "Edit car" : "Add car"}</h2>
      <label>Make</label>
      <select
        className="u-full-width"
        value={car.make}
        name="make"
        onChange={handleChange}
      >
        <option value="">-- select --</option>
        {props.store.carsMake.map((mt) => {
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
        value={car.model}
        name="model"
        onChange={handleChange}
      />
      <div style={{ color: "red" }} id="error-message"></div>
        {props.editing ? (
          <div>
            <button
              className="button-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Edit car
            </button>
            <button type="submit" onClick={() => props.resetCar(car.id, car)}>
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              className="button-primary"
              type="submit"
              onClick={handleSubmit}
            >
              Add car
            </button>
          </div>
        )}
    </form>
  );
};

export default CarForm;
