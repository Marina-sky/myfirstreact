import { makeObservable, observable, action } from "mobx";

class CarStore {
  cars = [];
  carsMake = [];

  constructor() {
    makeObservable(this, {
      cars: observable,
      createCar: action,
      updateCar: action,
      deleteCar: action,
      carsMake: observable,
      createCarMake: action,
      updateCarMake: action,
      deleteCarMake: action,
    });
  }

  createCar(car = { id: 0, make: "", model: "" }) {
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
      this.cars.splice(carIndexAtId, 1);
    }
  }

  createCarMake(carMake = { id: 0, name: ""}) {
    this.carsMake.push(carMake);
  }

  updateCarMake(carMakeId, update) {
    const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
    if (carMakeIndexAtId > -1 && update) {
      this.carsMake[carMakeIndexAtId] = update;
    }
  }

  deleteCarMake(carMakeId) {
    const carMakeIndexAtId = this.carsMake.findIndex((carMake) => carMake.id === carMakeId);
    if (carMakeIndexAtId > -1) {
      this.carsMake.splice(carMakeIndexAtId, 1);
    }
  }
}

export default CarStore;
