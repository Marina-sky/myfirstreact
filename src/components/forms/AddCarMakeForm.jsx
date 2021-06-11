import React, { useState } from "react";

const AddCarMakeForm = (props) => {
  const initCarMake = { id: null, name: "" };

  const [carMake, setCarMake] = useState(initCarMake);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarMake({ ...carMake, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carMake.name) {
      carMake.id = props.store.carsMake.length + 1;
      props.store.createCarMake(carMake);
      document.getElementById("error-message").style.display = "none";
    } else {
      document.getElementById("error-message").innerHTML =
        "This field is required.";
    }
    setCarMake(initCarMake);
  };

  return (
    <form>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={carMake.name}
        name="name"
        onChange={handleChange}
      />
      <div style={{ color: "red" }} id="error-message"></div>
      <button className="button-primary" type="submit" onClick={handleSubmit}>
        Add car make
      </button>
    </form>
  );
};

export default AddCarMakeForm;
