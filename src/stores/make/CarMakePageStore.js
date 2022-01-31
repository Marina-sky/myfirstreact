import { makeAutoObservable } from "mobx";

class CarMakePageStore {
  carMakes = [];

  constructor() {
    makeAutoObservable(this);
  }

  createCarMake(name) {
    this.carMakes.push({ id: this.carMakes.length + 1, name });
  }

  deleteCarMake(id) {
    this.carMakes = this.carMakes.filter((carMake) => carMake.id !== id);
  }

  editCarMake(id, newName) {
    const carMakeIndexAtId = this.carMakes.findIndex(
      (carMake) => carMake.id === id
    );
    if (carMakeIndexAtId > -1 && newName) {
      this.carMakes[carMakeIndexAtId] = {id, name: newName};
    }
  }
}

export default CarMakePageStore;
