import React from "react";

import CarMakeListPage from './pages/make/CarMakeListPage'
import CarListPage from './pages/car/CarListPage'

import car_logo from "./layouts/car_logo.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App(props) {
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
                <img src={car_logo} alt="Car logo" />
              </div>
            }
          />
          <Route path="/cars" element={<CarListPage store={props.store} />}>
            <Route path="edit/:carId" element={<div />} />
          </Route>
          <Route path="/makes" element={<CarMakeListPage />}>
            <Route path="edit/:makeId" element={<div />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}