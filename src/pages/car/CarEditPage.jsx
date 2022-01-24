import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'

class CarEditPage extends React.Component {
  render() {
    const { carId } = this.props.match.params
    const { newMake, newModel, error, setNewMake, setNewModel, setError } =
      this.props.CarEditPageStore
    const { cars, editCar } = this.props.CarPageStore
    const { carMakes } = this.props.CarMakePageStore

    const currentCar = cars.find((car) => car.id === Number(carId))

    if (!currentCar) {
      return (
        <div>
          <p>No car with this ID</p>
          <Link to="/makes">Back</Link>
        </div>
      )
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (newMake && newModel) {
        editCar(Number(carId), newMake, newModel)
        this.props.history.push('/cars')
      } else {
        setError('Both fields are required.')
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit car</h2>
        <label>Make</label>
        <select
          className="u-full-width"
          value={newMake}
          name="make"
          onChange={(event) => {
            setNewMake(event.target.value)
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
          value={newModel}
          name="model"
          onChange={(event) => {
            setNewModel(event.target.value)
            setError('')
          }}
        />
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <div>
          <button className="button-primary" type="submit">
            Edit car
          </button>
          <Link to="/cars" className="button">
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

export default inject(
  'CarEditPageStore',
  'CarPageStore',
  'CarMakePageStore',
)(observer(withRouter(CarEditPage)))
