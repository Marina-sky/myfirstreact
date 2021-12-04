import React from "react";
import { observer } from "mobx-react";
import { useCarMakeStore } from '../contexts'

import Table from "../components/Table";
import CarMakeForm from "../components/forms/CarMakeForm";

const CarMakeListPage = observer(() => {
  const store = useCarMakeStore()

  return (
    <div className="container">
      <h1>Car List App</h1>
      <div className="row">
        <div className="five columns">
          <div>
            <CarMakeForm store={store} />
          </div>
        </div>
        <div className="seven columns">
          <h2>View cars make</h2>
          <Table
            name="cars make"
            headings={["ID", "Name"]}
            data={store.carMakes.map((carMake) => [
              carMake.id,
              carMake.name,
            ])}
            onDelete={(id) => store.deleteCarMake(id)}
          />
        </div>
      </div>
    </div>
  );
});

export default CarMakeListPage;