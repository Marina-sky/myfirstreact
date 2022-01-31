import { makeAutoObservable } from "mobx";

class CarMakeFormStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default CarMakeFormStore;
