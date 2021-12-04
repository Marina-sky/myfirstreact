import React from "react";

import CarMakeListPage from './pages/CarMakeListPage'
import CarListPage from './pages/CarListPage'

import car_drawing from "./common/car_drawing.png";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/makes">Makes</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <h1>Car List App</h1>
                <img src={car_drawing} alt="Car logo" />
              </div>
            }
          />
          <Route path="/cars" element={<CarListPage store={props.store} />}>
            <Route path="edit/:carId" element={<div />} />
          </Route>
          <Route path="/makes" element={<CarMakeListPage />}>
            <Route path="edit/:makeId" element={<div />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

// const CarsApp = observer((props) => {
//   return (
//     <div className="container">
//       <h1>Car List App</h1>
//       <div className="row">
//         <div className="five columns">
//           <div>
//             <CarForm store={props.store} />
//           </div>
//         </div>
//         <div className="seven columns">
//           <h2>View cars</h2>
//           <Table
//             store={props.store}
//             name="cars"
//             headings={["ID", "Make", "Model"]}
//             data={props.store.cars.map((car) => [car.id, car.make, car.model])}
//             onDelete={(carId) => props.store.deleteCar(carId)}
//             onEdit={(car) => props.store.updateCar(car.id, car)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// });

// const CarsMake = observer((props) => {
//   const [carMakeId, setCarMakeId] = React.useState(null);

//   const localStore = useLocalObservable(() => ({
//     carMakes: [],
//     createCarMake(name) {
//       this.carMakes.push({ id: this.carMakes.length, name })
//     },
//     deleteCarMake(id) {
//       this.carMakes = this.carMakes.filter((carMake) => carMake.id !== id)
//     },
//   }))

//   return ( 
//     <div className="container">
//       <h1>Car List App</h1>
//       <div className="row">
//         <div className="five columns">
//           <div>
//             <CarMakeForm store={localStore} id={carMakeId} />
//           </div>
//         </div>
//         <div className="seven columns">
//           <h2>View cars make</h2>
//           <Table
//             name="cars make"
//             headings={["ID", "Name"]}
//             data={localStore.carMakes.map((carMake) => [carMake.id, carMake.name])}
//             onDelete={(id) => localStore.deleteCarMake(id)}
//             // onEdit={(id) => setCarMakeId(id)}
//           />
//         </div>
//       </div>
//     </div>
//   )
// });
