import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'
import CarEditPageStore from './CarEditPageStore';
import Field from '../../components/Field'
import Button from '../../components/Button'

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
        <div className="space-y-3">
          <Field
            label="Make"
            as="select"
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
          </Field>
          <Field
            label="Model"
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
          <div className="not-prose space-x-2">
            <Button variant="primary" type="submit">
              Edit car
            </Button>
            <Button as={Link} variant="white" to="/cars">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default inject(() => ({
  carEditPageStore: new CarEditPageStore()
}))(withRouter(observer(CarEditPage)))
