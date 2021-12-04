import React from "react";
import CarStore from "./stores/CarStore";
import Table from "./components/Table";
import CarForm from "./components/forms/CarForm";
import CarMakeForm from "./components/forms/CarMakeForm";
import car_drawing from "./common/car_drawing.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const store = new CarStore();

export default function NavigationLinks() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/makes">Makes</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <h1>Car List App</h1>
                <img src={car_drawing} alt="Car logo" />
              </div>
            }
          />
          <Route path="/cars" element={<CarsApp />}>
            <Route path="edit/:carId" element={<div />} />
          </Route>
          <Route path="/makes" element={<CarsMake />}>
            <Route path="edit/:makeId" element={<div />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

const CarsApp = () => {
  return (
    <div className="container">
      <h1>Car List App</h1>
      <div className="row">
        <div className="five columns">
          <div>
            <CarForm store={store} />
          </div>
        </div>
        <div className="seven columns">
          <h2>View cars</h2>
          <Table
            store={store}
            name="cars"
            headings={["ID", "Make", "Model"]}
            data={store.cars.map((car) => [car.id, car.make, car.model])}
            onDelete={(car) => store.deleteCar(car.id)}
            onEdit={(car) => store.updateCar(car.id, car)}
          />
        </div>
      </div>
    </div>
  );
};

const CarsMake = () => {
  const [carMakeId, setCarMakeId] = React.useState(null);

  return (
    <div className="container">
      <h1>Car List App</h1>
      <div className="row">
        <div className="five columns">
          <div>
            <CarMakeForm store={store} id={carMakeId} />
          </div>
        </div>
        <div className="seven columns">
          <h2>View cars make</h2>
          <Table
            store={store}
            name="cars make"
            headings={["ID", "Name"]}
            data={store.carsMake.map((carMake) => [carMake.id, carMake.name])}
            onDelete={(carMake) => store.deleteCarMake(carMake.id)}
            onEdit={(id) => setCarMakeId(id)}
          />
        </div>
      </div>
    </div>
  );
};
