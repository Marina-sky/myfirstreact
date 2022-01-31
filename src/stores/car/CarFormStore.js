import { makeAutoObservable } from "mobx";

class CarFormStore {

  constructor() {
    makeAutoObservable(this);
  }
}

export default CarFormStore;
