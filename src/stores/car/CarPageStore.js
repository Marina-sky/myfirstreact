import { makeAutoObservable } from "mobx";

class CarPageStore {
  cars = [];

  constructor() {
    makeAutoObservable(this);
  }

  createCar(car) {
    this.cars.push({ id: this.cars.length + 1, ...car });
  }

  deleteCar(id) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  editCar(id, newMake, newModel) {
    const carIndexAtId = this.cars.findIndex((car) => car.id === id);
    if (carIndexAtId > -1 && newMake && newModel) {
      this.cars[carIndexAtId] = { id, make: newMake, model: newModel };
    }
  }
}

export default CarPageStore;
