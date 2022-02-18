import { makeAutoObservable } from "mobx";

class CarMakeEditPageStore {
  newName = ""
  error = ""

  constructor() {
    makeAutoObservable(this);
  }

  setNewName(name) {
    this.newName = name
  }

  setError(error) {
    this.error = error
  }
}

export default CarMakeEditPageStore;