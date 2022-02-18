import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CarPageStore from './stores/car/CarPageStore'
import CarFormStore from './stores/car/CarFormStore'
import CarEditPageStore from "./stores/car/CarEditPageStore";
import CarMakePageStore from './stores/make/CarMakePageStore'
import CarMakeFormStore from './stores/make/CarMakeFormStore'
import CarMakeEditPageStore from './stores/make/CarMakeEditPageStore'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider
    CarPageStore={new CarPageStore()}
    CarEditPageStore={new CarEditPageStore()}
    CarFormStore={new CarFormStore()}
    CarMakeEditPageStore={new CarMakeEditPageStore()}
    CarMakePageStore={new CarMakePageStore()}
    CarMakeFormStore={new CarMakeFormStore()}
  >
    <App />
  </Provider>,
  document.getElementById("root")
);
