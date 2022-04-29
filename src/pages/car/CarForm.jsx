import React from "react";
import { inject, observer } from "mobx-react";
import CarFormStore from "./CarFormStore";
import Field from "../../components/Field";
import Button from "../../components/Button";

class CarForm extends React.Component {
  componentDidMount() {
    const { carFormStore } = this.props;
    carFormStore.initialize();
  }

  render() {
    const { carFormStore, onCreate } = this.props;

    return (
      <form
        onSubmit={async (event) => {
          onCreate(await carFormStore.handleSubmit(event));
        }}
      >
        <h2>Add car</h2>
        <div className="space-y-3">
          <Field
            label="Make"
            as="select"
            value={carFormStore.carMakeId}
            name="make"
            onChange={(event) => {
              carFormStore.setCarMakeId(event.target.value);
              carFormStore.setError("");
            }}
          >
            <option value="">-- select --</option>
            {carFormStore.carMakes.map((mt) => {
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
            value={carFormStore.carModel}
            name="model"
            onChange={(event) => {
              carFormStore.setCarModel(event.target.value);
              carFormStore.setError("");
            }}
          />
          {carFormStore.error && (
            <div style={{ color: "red" }}>{carFormStore.error}</div>
          )}
          <div>
            <Button variant="primary" type="submit">
              Add car
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

const carFormStore = new CarFormStore();

export default inject(() => ({
  carFormStore,
}))(observer(CarForm));
