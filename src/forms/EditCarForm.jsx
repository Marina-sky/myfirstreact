import React, { useState, useEffect } from "react";

const EditCarForm = (props) => {
  useEffect(() => {
    setCar(props.currentCar);
  }, [props]);

  const [car, setCar] = useState(props.currentCar);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (car.make && car.model) {
      props.updateCar(car);
      document.getElementById("error-message").style.display = "none";
    }
    if (car.make == "" || car.model == "") {
      document.getElementById("error-message").innerHTML =
        "All fields are required.";
    }
  };

  return (
    <form>
      <label>Make</label>
      <input
        className="u-full-width"
        type="text"
        value={car.make}
        name="make"
        onChange={handleChange}
      />
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
        Edit car
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditCarForm;
