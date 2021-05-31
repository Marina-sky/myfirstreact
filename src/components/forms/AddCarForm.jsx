import React, { useState } from "react";

const AddCarForm = (props) => {
  
  const initCar = { id: null, make: "", model: "" };
  const [car, setCar] = useState(initCar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (car.make && car.model) {
      car.id = props.store.cars.length +1;
      props.store.createCar(car);
      document.getElementById("error-message").style.display = "none";
    } else {
      document.getElementById("error-message").innerHTML = "All fields are required.";
    }
    setCar(initCar);
  };

  return (
    <form>
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
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add car
      </button>
    </form>
  );
};

export default AddCarForm;
