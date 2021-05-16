import { makeObservable, observable, action } from "mobx";

class CarStore {
  cars = []

  constructor() {
    makeObservable(this, {
      cars: observable,
      createCar: action,
      updateCar: action,
      deleteCar: action
    });
  }

  createCar(car = { id: 0, make: "", model:"" }) {
    this.cars.push(car);
  }

  updateCar(carId, update) {
    const carIndexAtId = this.cars.findIndex((car) => car.id === carId);
    if (carIndexAtId > -1 && update) {
      this.cars[carIndexAtId] = update;
    }
  }

  deleteCar(carId) {
    const carIndexAtId = this.cars.findIndex((car) => car.id === carId);
    if (carIndexAtId > -1) {
      this.cars.splice(carIndexAtId, 1)
    }
  }
}

export default CarStore;
