import React, { useState, useEffect } from "react";

const CarMakeForm = (props) => {
  useEffect(() => {
  setCarMake(props.currentCarMake);
  }, [props]);

  const initCarMake = { id: null, name: "" };

  let state;
  if (props.editing === true) {
    state = props.currentCarMake;
  } else {
    state = initCarMake;
  }

  const [carMake, setCarMake] = useState(state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarMake({ ...carMake, [name]: value });
  };

  function handleRequest() {
    if (props.editing === true) {
      props.store.updateCarMake(carMake.id, carMake);
      props.resetCarMake(carMake.id, carMake);
    } else {
      carMake.id = props.store.carsMake.length + 1;
      props.store.createCarMake(carMake);
      setCarMake(initCarMake);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carMake.name) {
      handleRequest();
      document.getElementById("error-message").style.display = "none";
    } else {
      document.getElementById("error-message").innerHTML =
        "This field is required.";
    }
  };

  return (
    <form>
      <h2>{props.editing ? "Edit car make" : "Add car make"}</h2>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={carMake.name}
        name="name"
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
            Edit car make
          </button>
          <button type="submit" onClick={() => props.resetCarMake(carMake.id, carMake)}>
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
            Add car make
          </button>
        </div>
      )}
    </form>
  );
};

export default CarMakeForm;
