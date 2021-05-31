import React, { useState, useEffect } from "react";

const EditCarMakeForm = (props) => {
  useEffect(() => {
    setCarMake(props.currentCarMake);
  }, [props]);
console.log(props);
  const [carMake, setCarMake] = useState(props.currentCarMake);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarMake({ ...carMake, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carMake.name) {
      props.store.updateCarMake(carMake.id, carMake);
      props.resetCarMake(carMake.id, carMake);
      document.getElementById("error-message").style.display = "none";
    } else {
      document.getElementById("error-message").innerHTML =
        "All fields are required.";
    }
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
        Edit car make
      </button>
      <button type="submit" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};

export default EditCarMakeForm;
