import { makeAutoObservable } from "mobx";

class CarEditPageStore {
  error = "";
  newMake = "";

  constructor() {
    makeAutoObservable(this);
  }
}

export default CarEditPageStore;
