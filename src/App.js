import React from "react";

import CarMakeListPage from "./pages/make/CarMakeListPage";
import CarMakeEditPage from "./pages/make/CarMakeEditPage";
import CarListPage from "./pages/car/CarListPage";
import CarEditPage from "./pages/car/CarEditPage";
import Navigation from './components/Navigation.jsx';
import "./style.css";

import car_logo from "./layouts/car_logo.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="prose prose-md mx-auto py-6">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <h1>Car List App</h1>
              <img src={car_logo} alt="Car logo" />
            </div>
          </Route>
          <Route exact path="/cars">
            <CarListPage />
          </Route>
          <Route path="/cars/edit/:carId">
            <CarEditPage />
          </Route>
          <Route exact path="/makes">
            <CarMakeListPage />
          </Route>
          <Route path="/makes/edit/:makeId">
            <CarMakeEditPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
