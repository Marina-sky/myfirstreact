import React, { useState } from "react";
import CarStore from "./stores/CarStore";
import CarTable from "./components/CarTable";
import CarForm from "./components/forms/CarForm";

import CarMakeTable from "./components/CarMakeTable";
import AddCarMakeForm from "./components/forms/AddCarMakeForm";
import EditCarMakeForm from "./components/forms/EditCarMakeForm";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const store = new CarStore();

export default function NavigationLinks() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/make">Make</Link>
            </li>
            <li>
              <Link to="/">Cars</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/make">
            <CarsMake />
          </Route>
          <Route path="/">
            <CarsApp />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const CarsApp = () => {
  const [cars, setCars] = useState(CarTable);

  const [editing, setEditing] = useState(false);

  const initialCar = { id: null, make: "", model: "" };

  const [currentCar, setCurrentCar] = useState(initialCar);

  const editCar = (id, car) => {
    setEditing(true);
    setCurrentCar(car);
  };

  const resetCar = (newCar) => {
    setCars(store.cars.map((car) => (car.id === currentCar.id ? newCar : car)));
    setCurrentCar(initialCar);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>React App</h1>
      <div className="row">
        <div className="five columns">
            <div> 
              <CarForm
                currentCar={currentCar}
                setEditing={setEditing}
                resetCar={resetCar}
                store={store}
                editing={editing}
              />
            </div>
        
        </div>
        <div className="seven columns">
          <h2>View cars</h2>
          <CarTable cars={cars} editCar={editCar} store={store} />
        </div>
      </div>
    </div>
  );
};

const CarsMake = () => {
  const [carsMake, setCarsMake] = useState(CarMakeTable);

  const [editing, setEditing] = useState(false);

  const initialCarMake = { id: null, make: "" };

  const [currentCarMake, setCurrentCarMake] = useState(initialCarMake);

  const editCarMake = (id, car) => {
    setEditing(true);
    setCurrentCarMake(car);
  };

  const resetCarMake = (newCarMake) => {
    setCarsMake(
      store.carsMake.map((carMake) =>
        carMake.id === currentCarMake.id ? newCarMake : carMake
      )
    );
    setCurrentCarMake(initialCarMake);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>React App</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit car make</h2>
              <EditCarMakeForm
                currentCarMake={currentCarMake}
                setEditing={setEditing}
                resetCarMake={resetCarMake}
                store={store}
              />
            </div>
          ) : (
            <div>
              <h2>Add car make</h2>
              <AddCarMakeForm store={store} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View cars make</h2>
          <CarMakeTable
            carsMake={carsMake}
            editCarMake={editCarMake}
            store={store}
          />
        </div>
      </div>
    </div>
  );
};

