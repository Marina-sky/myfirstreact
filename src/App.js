import React, {useState} from "react";
import carList from "./data.js";
import CarTable from "./tables/CarTable";
import AddCarForm from "./forms/AddCarForm";

const App = () => {
  const [cars, setCars] = useState(carList);

  const addCar = (car) => {
    car.id = cars.length + 1;
    setCars([...cars, car]);
  };

  const deleteCar = (id) => setCars(cars.filter((car) => car.id !== id));

  return (
    <div className="container">
      <h1>React Car App</h1>
      <div className="row">
        <div className="six columns">
          <h2>Add car</h2>
          <AddCarForm addCar={addCar} />
        </div>
        <div className="six columns">
          <h2>View cars</h2>
          <CarTable cars={cars} deleteCar={deleteCar} />;
        </div>
      </div>
    </div>
  );
};

export default App;
