import { makeAutoObservable } from "mobx";

class CarEditPageStore {
  newMake = "";
  newModel = "";
  error = "";

  constructor() {
    makeAutoObservable(this);
  }

  setNewMake(make) {
    this.newMake = make;
  }

  setNewModel(model) {
    this.newModel = model;
  }

  setError(error) {
    this.error = error;
  }
}

export default CarEditPageStore;
