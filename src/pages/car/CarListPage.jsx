import React from "react";
import { inject, observer } from "mobx-react";

import Table from "../../components/Table";
import CarForm from "./CarForm";
import CarPageStore from "./CarPageStore";
import ConfirmModal from "../../components/ConfirmModal";

function CarListPage({ carPageStore }) {
  const [deletingCarId, setDeletingCarId] = React.useState(undefined);
  React.useEffect(() => {
    carPageStore.initialize();
  }, [carPageStore]);
  return (
    <div className="container">
      <h1>Car List App</h1>
      <div className="row">
        <div className="five columns">
          <div>
            <CarForm onCreate={(newCar) => carPageStore.createCar(newCar)} />
          </div>
        </div>
        <div className="seven columns">
          <h2>View cars</h2>
          <Table
            resource="cars"
            name="cars"
            headings={["ID", "Make", "Model"]}
            data={carPageStore.cars.map((car) => [
              car.id,
              car.make || "(Missing car make)",
              car.model,
            ])}
            onDelete={(carId) => {
              setDeletingCarId(carId);
            }}
          />
        </div>
      </div>
      {typeof deletingCarId !== "undefined" ? (
        <ConfirmModal
          title="Are you sure?"
          message="Deleting cars erases it from the database, there is no going back!"
          submitText="Delete"
          onClose={() => setDeletingCarId(undefined)}
          onSubmit={() => carPageStore.deleteCar(deletingCarId)}
        />
      ) : null}
    </div>
  );
}

export default inject(() => ({
  carPageStore: new CarPageStore(),
}))(observer(CarListPage));
