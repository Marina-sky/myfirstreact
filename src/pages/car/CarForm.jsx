import React from 'react'
import { inject, observer } from 'mobx-react'

class CarForm extends React.Component {
  render() {
    const { carMake, carModel, error, setCarMake, setCarModel, setError } =
      this.props.CarFormStore
    const { carMakes } = this.props.CarMakePageStore

    const handleSubmit = (e) => {
      e.preventDefault()
      if (carMake && carModel) {
        this.props.store.createCar({
          make: carMake,
          model: carModel,
        })
        setCarMake('')
        setCarModel('')
      } else {
        setError('Both fields are required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Add car</h2>
        <label>Make</label>
        <select
          className="u-full-width"
          value={carMake}
          name="make"
          onChange={(event) => {
            setCarMake(event.target.value)
            setError('')
          }}
        >
          <option value="">-- select --</option>
          {carMakes.map((mt) => {
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
          value={carModel}
          name="model"
          onChange={(event) => {
            setCarModel(event.target.value)
            setError('')
          }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Add car
          </button>
        </div>
      </form>
    )
  }
}

export default inject('CarFormStore', 'CarMakePageStore')(observer(CarForm))
