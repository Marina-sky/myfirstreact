import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CarPageStore from './stores/car/CarPageStore'
import CarFormStore from './stores/car/CarFormStore'
import CarMakePageStore from './stores/make/CarMakePageStore'
import CarMakeFormStore from './stores/make/CarMakeFormStore'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider
    CarMakePageStore={new CarMakePageStore()}
    CarPageStore={new CarPageStore()}
    CarFormStore={new CarFormStore()}
    CarMakeFormStore={new CarMakeFormStore()}
  >
    <App />
  </Provider>,
  document.getElementById('root'),
)
