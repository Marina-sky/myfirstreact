import React from "react";
import { inject, observer } from "mobx-react";

import Table from "../../components/Table";
import CarMakeForm from "./CarMakeForm";
import CarMakePageStore from "./CarMakePageStore";
import ConfirmModal from "../../components/ConfirmModal";

class CarMakeListPage extends React.Component {
  componentDidMount() {
    this.props.carMakePageStore.initialize();
  }

  render() {
    const { carMakePageStore } = this.props;
    return (
      <>
        <div className="container">
          <h1>Car List App</h1>
          <div className="row">
            <div className="five columns">
              <div>
                <CarMakeForm
                  onCreate={(newMake) =>
                    carMakePageStore.createCarMake(newMake)
                  }
                />
              </div>
            </div>
            <div className="seven columns">
              <h2>View car makes</h2>
              <Table
                resource="makes"
                name="cars make"
                headings={["ID", "Name"]}
                data={carMakePageStore.carMakes.map((carMake) => [
                  carMake.id,
                  carMake.name,
                ])}
                onDelete={(makeId) => {
                  carMakePageStore.verifyDeleteCarMake(makeId);
                }}
              />
            </div>
          </div>
        </div>
        {typeof carMakePageStore.verifyDelete !== "undefined" ? (
          <ConfirmModal
            title="Are you sure?"
            message="Deleting car make also deletes all cars of that make."
            submitText="Delete"
            onClose={() => carMakePageStore.cancelDeleteCarMake()}
            onSubmit={() => carMakePageStore.deleteCarMake()}
          />
        ) : null}
      </>
    );
  }
}

export default inject(() => ({
  carMakePageStore: new CarMakePageStore(),
}))(observer(CarMakeListPage));
