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
}

export default CarPageStore;