import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import CarEditPageStore from './CarEditPageStore';

class CarEditPage extends React.Component {
  componentDidMount() {
    const { carEditPageStore, match, history } = this.props;
    carEditPageStore.initialize(Number(match.params.carId), history)
  }

  render() {
    const { carEditPageStore } = this.props;

    if (carEditPageStore.loading) {
      return <p>Loading...</p>
    }

    if (typeof carEditPageStore.newMake === 'undefined' && typeof carEditPageStore.newModel === 'undefined') {
      return (
        <div>
          <p>No car with this ID</p>
          <Link to="/cars">Back</Link>
        </div>
      );
    }

    return (
      <form onSubmit={(event) => {
        carEditPageStore.handleSubmit(event)
      }}>
        <h2>Edit car</h2>
        <label>Make</label>
        <select
          className="u-full-width"
          value={carEditPageStore.newMakeId}
          name="make"
          onChange={(event) => {
            carEditPageStore.setNewMakeId(event.target.value);
            carEditPageStore.setError("");
          }}
        >
          <option value="">-- select --</option>
          {carEditPageStore.carMakes.map((mt) => {
            const { id, name } = mt;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <label>Model</label>
        <input
          className="u-full-width"
          type="text"
          value={carEditPageStore.newModel}
          name="model"
          onChange={(event) => {
            carEditPageStore.setNewModel(event.target.value);
            carEditPageStore.setError("");
          }}
        />
        {carEditPageStore.error && (
          <div style={{ color: "red" }}>{carEditPageStore.error}</div>
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

export default inject(() => ({
  carEditPageStore: new CarEditPageStore()
}))(withRouter(observer(CarEditPage)))
