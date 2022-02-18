import React from 'react'
import { inject, observer } from 'mobx-react'

import Table from '../../components/Table'
import CarForm from './CarForm'

class CarListPage extends React.Component {
  render() {
    const {CarPageStore} = this.props
    return (
      <div className="container">
        <h1>Car List App</h1>
        <div className="row">
          <div className="five columns">
            <div>
              <CarForm />
            </div>
          </div>
          <div className="seven columns">
            <h2>View cars</h2>
            <Table
              name="cars"
              headings={['ID', 'Make', 'Model']}
              data={CarPageStore.cars.map((car) => [car.id, car.make, car.model])}
              onDelete={(carId) => CarPageStore.deleteCar(carId)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default inject('CarPageStore')(observer(CarListPage))
