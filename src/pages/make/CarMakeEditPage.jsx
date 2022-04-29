import React from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";
import CarMakeEditPageStore from "./CarMakeEditPageStore";
import Field from "../../components/Field";
import Button from "../../components/Button";

class CarMakeEditPage extends React.Component {
  componentDidMount() {
    const { carMakeEditPageStore, match, history } = this.props;
    carMakeEditPageStore.initialize(Number(match.params.makeId), history);
  }

  render() {
    const { carMakeEditPageStore } = this.props;

    if (carMakeEditPageStore.loading) {
      return <p>Loading...</p>;
    }

    if (typeof carMakeEditPageStore.newName === "undefined") {
      return (
        <div>
          <p>No car make with this ID</p>
          <Link to="/makes">Back</Link>
        </div>
      );
    }

    return (
      <form
        onSubmit={(event) => {
          carMakeEditPageStore.handleSubmit(event);
        }}
      >
        <h2>Edit car make</h2>
        <div className="space-y-3">
          <Field
            label="Name"
            type="text"
            value={carMakeEditPageStore.newName}
            onChange={(event) => {
              carMakeEditPageStore.setNewName(event.target.value);
              carMakeEditPageStore.setError("");
            }}
          />
          {carMakeEditPageStore.error && (
            <div style={{ color: "red" }}>{carMakeEditPageStore.error}</div>
          )}
          <div className="not-prose space-x-2">
            <Button variant="primary" type="submit">
              Edit car make
            </Button>
            <Button as={Link} variant="white" to="/makes" className="button">
              Cancel
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default inject(() => ({
  carMakeEditPageStore: new CarMakeEditPageStore(),
}))(withRouter(observer(CarMakeEditPage)));
