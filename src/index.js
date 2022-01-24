import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import CarMakePageStore from './stores/CarMakePageStore'
import CarPageStore from './stores/CarPageStore'
import CarFormStore from './stores/CarFormStore'
import CarMakeFormStore from './stores/CarMakeFormStore'
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
