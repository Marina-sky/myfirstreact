import React from 'react'
import { inject, observer } from 'mobx-react'

class CarForm extends React.Component {
  render() {
    const { CarFormStore, CarPageStore, CarMakePageStore } = this.props

    const handleSubmit = (e) => {
      e.preventDefault()
      if (CarFormStore.carMake && CarFormStore.carModel) {
        CarPageStore.createCar({
          make: CarFormStore.carMake,
          model: CarFormStore.carModel,
        })
        CarFormStore.setCarMake('')
        CarFormStore.setCarModel('')
      } else {
        CarFormStore.setError('Both fields are required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Add car</h2>
        <label>Make</label>
        <select
          className="u-full-width"
          value={CarFormStore.carMake}
          name="make"
          onChange={(event) => {
            CarFormStore.setCarMake(event.target.value)
            CarFormStore.setError('')
          }}
        >
          <option value="">-- select --</option>
          {CarMakePageStore.carMakes.map((mt) => {
            const { id, name } = mt
            return (
              <option key={id} value={name}>
                {name}
              </option>
            )
          })}
        </select>
        <label>Model</label>
        <input
          className="u-full-width"
          type="text"
          value={CarFormStore.carModel}
          name="model"
          onChange={(event) => {
            CarFormStore.setCarModel(event.target.value)
            CarFormStore.setError('')
          }}
        />
        {CarFormStore.error && <div style={{ color: 'red' }}>{CarFormStore.error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Add car
          </button>
        </div>
      </form>
    )
  }
}

export default inject('CarFormStore', 'CarPageStore', 'CarMakePageStore')(observer(CarForm))
