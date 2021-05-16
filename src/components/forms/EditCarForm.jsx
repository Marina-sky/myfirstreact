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
      props.store.updateCar(car.id, car);
      document.getElementById("error-message").style.display = "none";
    } else {
      document.getElementById("error-message").innerHTML =
        "All fields are required.";
    }
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
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Chevrolet">Chevrolet</option>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
        <option value="Mazda">Mazda</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="Toyota">Toyota</option>
        <option value="Volkswagen">Volkswagen</option>
        <option value="Volvo">Volvo</option>
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
        Edit car
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditCarForm;
