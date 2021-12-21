import React from "react";
import { observer } from "mobx-react";
import { useCarStore } from "../../common/contexts";

import Table from "../../components/Table";
import CarForm from "./CarForm";

const CarListPage = observer(() => {
  const store = useCarStore()

  return (
    <div className="container">
      <h1>Car List App</h1>
      <div className="row">
        <div className="five columns">
          <div>
            <CarForm store={store} />
          </div>
        </div>
        <div className="seven columns">
          <h2>View cars</h2>
          <Table
            store={store}
            name="cars"
            headings={["ID", "Make", "Model"]}
            data={store.cars.map((car) => [car.id, car.make, car.model])}
            onDelete={(carId) => store.deleteCar(carId)}
            onEdit={(car) => store.updateCar(car.id, car)}
          />
        </div>
      </div>
    </div>
  );
});

export default CarListPage;