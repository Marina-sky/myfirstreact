import { makeAutoObservable } from "mobx";

class CarMakeEditPageStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default CarMakeEditPageStore;