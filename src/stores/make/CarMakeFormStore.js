import { makeAutoObservable } from "mobx";

class CarMakeFormStore {
  carMakeName = ''
  error = ''

  constructor() {
    makeAutoObservable(this);
  }

  setCarMakeName(name) {
    this.carMakeName = name
  }

  setError(error) {
    this.error = error
  }
}

export default CarMakeFormStore;
