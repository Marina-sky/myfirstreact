import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'

class CarEditPage extends React.Component {
  componentDidMount() {
    const { carId } = this.props.match.params;
    const { CarEditPageStore, CarPageStore } = this.props;
    const currentCar = CarPageStore.cars.find(
      (car) => car.id === Number(carId)
    );
    
    CarEditPageStore.setNewMake(currentCar ? currentCar.make : "");
    CarEditPageStore.setNewModel(currentCar ? currentCar.model : "");
  }

  render() {
    const { carId } = this.props.match.params
    const { CarEditPageStore, CarPageStore, CarMakePageStore } = this.props;

    if (!CarEditPageStore.newMake && !CarEditPageStore.newModel) {
      return (
        <div>
          <p>No car with this ID</p>
          <Link to="/cars">Back</Link>
        </div>
      );
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (CarEditPageStore.newMake && CarEditPageStore.newModel) {
        CarPageStore.editCar(
          Number(carId),
          CarEditPageStore.newMake,
          CarEditPageStore.newModel
        );
        this.props.history.push("/cars");
      } else {
        CarEditPageStore.setError("Both fields are required.");
      }
    }

    return (
      <form onSubmit={handleSubmit}>
        <h2>Edit car</h2>
        <label>Make</label>
        <select
          className="u-full-width"
          value={CarEditPageStore.newMake}
          name="make"
          onChange={(event) => {
            CarEditPageStore.setNewMake(event.target.value);
            CarEditPageStore.setError("");
          }}
        >
          <option value="">-- select --</option>
          {CarMakePageStore.carMakes.map((mt) => {
            const { id, name } = mt;
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>
        <label>Model</label>
        <input
          className="u-full-width"
          type="text"
          value={CarEditPageStore.newModel}
          name="model"
          onChange={(event) => {
            CarEditPageStore.setNewModel(event.target.value);
            CarEditPageStore.setError("");
          }}
        />
        {CarEditPageStore.error && (
          <div style={{ color: "red" }}>{CarEditPageStore.error}</div>
        )}
        <div>
          <button className="button-primary" type="submit">
            Edit car
          </button>
          <Link to="/cars" className="button">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default inject(
  'CarEditPageStore',
  'CarPageStore',
  'CarMakePageStore',
)(withRouter(observer(CarEditPage)))
