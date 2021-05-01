import React, { useState } from "react";
import carList from "./data.js";
import CarTable from "./tables/CarTable";
import AddCarForm from "./forms/AddCarForm";
import EditCarForm from "./forms/EditCarForm";

const App = () => {
  const [cars, setCars] = useState(carList);

  const addCar = (car) => {
    car.id = cars.length + 1;
    setCars([...cars, car]);
  };

  const deleteCar = (id) => setCars(cars.filter((car) => car.id !== id));

  const [editing, setEditing] = useState(false);

  const initialCar = { id: null, make: "", model: "" };

  const [currentCar, setCurrentCar] = useState(initialCar);

  const editCar = (id, car) => {
    setEditing(true);
    setCurrentCar(car);
  };
  const updateCar = (newCar) => {
    setCars(cars.map((car) => (car.id === currentCar.id ? newCar : car)));
    setCurrentCar(initialCar);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>React App</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit car</h2>
              <EditCarForm
                currentCar={currentCar}
                setEditing={setEditing}
                updateCar={updateCar}
              />
            </div>
          ) : (
            <div>
              <h2>Add car</h2>
              <AddCarForm addCar={addCar} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View cars</h2>
          <CarTable cars={cars} deleteCar={deleteCar} editCar={editCar} />
        </div>
      </div>
    </div>
  );
};

export default App;
