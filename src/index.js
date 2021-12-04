import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CarMakePageStore from "./stores/CarMakePageStore";
import CarPageStore from "./stores/CarPageStore";
import { CarMakeContext, CarContext } from "./contexts";

ReactDOM.render(
  <CarMakeContext.Provider value={new CarMakePageStore()}>
    <CarContext.Provider value={new CarPageStore()}>
      <App />
    </CarContext.Provider>
  </CarMakeContext.Provider>,
  document.getElementById("root")
);
