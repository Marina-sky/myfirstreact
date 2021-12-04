import React, { useState } from "react";

const CarMakeForm = (props) => {
  // useEffect(() => {
  // setCarMake(props.currentCarMake);
  // }, [props]);

  const [carMakeName, setCarMakeName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (carMakeName) {
      if (props.id) {
        props.store.updateCarMake(props.id, { id: props.id, name: carMakeName });
        // props.resetCarMake(carMake.id, carMake);
      } else {
        props.store.createCarMake({
          name: carMakeName,
          id: props.store.carsMake.length + 1,
        });
        setCarMakeName("");
      }
    } else {
      setError("This field is required.")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{props.editing ? "Edit car make" : "Add car make"}</h2>
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
      {/* {props.editing ? (
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
      ) : ( */}
        <div>
          <button
            className="button-primary"
            type="submit"
          >
            Add car make
          </button>
        </div>
      {/* )} */}
    </form>
  );
};

export default CarMakeForm;
