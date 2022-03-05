import React from 'react'
import { inject, observer } from 'mobx-react'

import Table from '../../components/Table'
import CarForm from './CarForm'
import CarPageStore from './CarPageStore'

class CarListPage extends React.Component {
  componentDidMount() {
    const {carPageStore} = this.props
    carPageStore.initialize()
  }

  render() {
    const { carPageStore } = this.props
    return (
      <div className="container">
        <h1>Car List App</h1>
        <div className="row">
          <div className="five columns">
            <div>
              <CarForm onCreate={(newCar) => carPageStore.createCar(newCar)} />
            </div>
          </div>
          <div className="seven columns">
            <h2>View cars</h2>
            <Table
              resource="cars"
              name="cars"
              headings={['ID', 'Make', 'Model']}
              data={carPageStore.cars.map((car) => [
                car.id,
                car.make || '(Missing car make)',
                car.model,
              ])}
              onDelete={(carId) => carPageStore.deleteCar(carId)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default inject(() => ({
  carPageStore: new CarPageStore(),
}))(observer(CarListPage))
