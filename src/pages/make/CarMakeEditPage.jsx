import React, { useState } from "react";
import { observer } from "mobx-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCarMakeStore } from "../../common/contexts";

const CarMakeEditPage = () => {
  const [error, setError] = useState("");
  const { makeId } = useParams();
  const store = useCarMakeStore();
  let navigate = useNavigate();

  const currentCarMake = store.carMakes.find(
    (make) => make.id === Number(makeId)
  );

  const [newName, setNewName] = useState(
    currentCarMake ? currentCarMake.name : ""
  );

  if (!currentCarMake) {
    return (
      <div>
        <p>No car make with this ID</p>
        <Link to="/makes">Back</Link>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName) {
      store.editCarMake(Number(makeId), newName);
      navigate("/makes");
    } else {
      setError("This field is required.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit car make</h2>
      <label>Name</label>
      <input
        className="u-full-width"
        type="text"
        value={newName}
        onChange={(event) => {
          setNewName(event.target.value);
          setError("");
        }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <div>
        <button className="button-primary" type="submit">
          Edit car make
        </button>
        <Link to="/makes" className="button">
          Cancel
        </Link>
      </div>
    </form>
  );
};

export default observer(CarMakeEditPage);
