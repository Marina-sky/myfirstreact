import React, { useState } from "react";
import { observer } from "mobx-react-lite";

const CarMakeForm = (props) => {
  const [carMakeName, setCarMakeName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carMakeName) {
      props.store.createCarMake(carMakeName);
      setCarMakeName("");
    } else {
      setError("This field is required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add car make</h2>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={carMakeName}
        onChange={(event) => {
          setCarMakeName(event.target.value)
          setError("")
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
        <div>
          <button
            className="button-primary"
            type="submit"
          >
            Add car make
          </button>
        </div>
    </form>
  );
};

export default observer(CarMakeForm);
