import React from 'react'
import { inject, observer } from 'mobx-react'
import CarFormStore from './CarFormStore'

class CarForm extends React.Component {
  componentDidMount() {
    const { carFormStore } = this.props
    carFormStore.initialize()
  }

  render() {
    const { carFormStore, onCreate } = this.props

    return (
      <form onSubmit={async (event) => {
        onCreate(await carFormStore.handleSubmit(event))
      }}>
        <h2>Add car</h2>
        <label>Make</label>
        <select
          className="u-full-width"
          value={carFormStore.carMakeId}
          name="make"
          onChange={(event) => {
            carFormStore.setCarMakeId(event.target.value)
            carFormStore.setError('')
          }}
        >
          <option value="">-- select --</option>
          {carFormStore.carMakes.map((mt) => {
            const { id, name } = mt
            return (
              <option key={id} value={id}>
                {name}
              </option>
            )
          })}
        </select>
        <label>Model</label>
        <input
          className="u-full-width"
          type="text"
          value={carFormStore.carModel}
          name="model"
          onChange={(event) => {
            carFormStore.setCarModel(event.target.value)
            carFormStore.setError('')
          }}
        />
        {carFormStore.error && <div style={{ color: 'red' }}>{carFormStore.error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Add car
          </button>
        </div>
      </form>
    )
  }
}

const carFormStore = new CarFormStore()

export default inject(() => ({
  carFormStore,
}))(observer(CarForm))

