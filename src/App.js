import React, { useState } from "react";
import CarStore from "./stores/CarStore";
import CarTable from "./components/CarTable";
import CarForm from "./components/forms/CarForm";
import CarMakeForm from "./components/forms/CarMakeForm";

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

const CarsApp = (props) => {
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
          <CarTable
            cars={cars}
            editCar={editCar}
            store={store}
            name="cars"
            headings={["ID", "Make", "Model"]}
            data={store.cars.map((car) => [car.id, car.make, car.model])}
            onDelete={(car) => props.store.deleteCar(car.id)}
            onEdit={(car) => props.editCar(car.id, car)}
          />
        </div>
      </div>
    </div>
  );
};


const CarsMake = (props) => {
  const [carsMake, setCarsMake] = useState(CarTable);

  const [editing, setEditing] = useState(false);

  const initialCarMake = { id: null, name: "" };

  const [currentCarMake, setCurrentCarMake] = useState(initialCarMake);

  const editCarMake = (id, carMake) => {
    setEditing(true);
    setCurrentCarMake(carMake);
  };

  const resetCarMake = (newCarMake) => {
    setCarsMake(store.carsMake.map((carMake) => (carMake.id === currentCarMake.id ? newCarMake : carMake)));
    setCurrentCarMake(initialCarMake);
    setEditing(false);
  };

  return (
    <div className="container">
      <h1>React App</h1>
      <div className="row">
        <div className="five columns">
          <div>
            <CarMakeForm
              currentCarMake={currentCarMake}
              setEditing={setEditing}
              resetCarMake={resetCarMake}
              store={store}
              editing={editing}
            />
          </div>
        </div>
        <div className="seven columns">
          <h2>View cars make</h2>
          <CarTable
            carsMake={carsMake}
            editCarMake={editCarMake}
            store={store}
            name="cars make"
            headings={["ID", "Name"]}
            data={store.carsMake.map((carMake) => [
              carMake.id,
              carMake.name,
            ])}
            onDelete={(carMake) => props.store.deleteCarMake(carMake.id)}
            onEdit={(carMake) => props.editCarMake(carMake.id, carMake)}
          />
        </div>
      </div>
    </div>
  );
};

