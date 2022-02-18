import { makeAutoObservable } from "mobx";

class CarFormStore {
  carMake = ''
  carModel = ''
  error = ''

  constructor() {
    makeAutoObservable(this);
  }

  setCarMake(carMake) {
    this.carMake = carMake
  }

  setCarModel(carModel) {
    this.carModel = carModel
  }

  setError(error) {
    this.error = error
  }
}

export default CarFormStore;
