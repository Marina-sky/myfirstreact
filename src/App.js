import React, { useState } from "react";
import CarStore from "./stores/CarStore";
import CarTable from "./components/CarTable";
import AddCarForm from "./components/forms/AddCarForm";
import EditCarForm from "./components/forms/EditCarForm";

const store = new CarStore();

const App = () => {
/*  const [cars, setCars] = useState(CarTable);

  const addCar = (car) => {
    car.id = cars.length + 1;
    setCars([...cars, car]);
  };

  const updateCar = (newCar) => {
    setCars(cars.map((car) => (car.id === currentCar.id ? newCar : car)));
    setCurrentCar(initialCar);
    setEditing(false);
  }; */

  const [editing, setEditing] = useState(false);

  const initialCar = { id: null, make: "", model: "" };

  const [currentCar, setCurrentCar] = useState(initialCar);

  const editCar = (id, car) => {
    setEditing(true);
    setCurrentCar(car);
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
                store={store}
              />
            </div>
          ) : (
            <div>
              <h2>Add car</h2>
              <AddCarForm store={store} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View cars</h2>
          <CarTable editCar={editCar} store={store} />
        </div>
      </div>
    </div>
  );
};

export default App;
