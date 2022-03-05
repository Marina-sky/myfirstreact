import React from 'react'
import { inject, observer } from 'mobx-react'

import Table from '../../components/Table'
import CarMakeForm from './CarMakeForm'
import CarMakePageStore from './CarMakePageStore'

class CarMakeListPage extends React.Component {
  componentDidMount() {
    this.props.carMakePageStore.initialize()
  }

  render() {
    const { carMakePageStore } = this.props
    return (
      <div className="container">
        <h1>Car List App</h1>
        <div className="row">
          <div className="five columns">
            <div>
              <CarMakeForm onCreate={(newMake) => carMakePageStore.createCarMake(newMake)} />
            </div>
          </div>
          <div className="seven columns">
            <h2>View car makes</h2>
            <Table
              resource="makes"
              name="cars make"
              headings={['ID', 'Name']}
              data={carMakePageStore.carMakes.map((carMake) => [
                carMake.id,
                carMake.name,
              ])}
              onDelete={(makeId) => carMakePageStore.deleteCarMake(makeId)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default inject(() => ({
  carMakePageStore: new CarMakePageStore(),
}))(observer(CarMakeListPage))
