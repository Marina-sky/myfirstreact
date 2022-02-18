import { makeAutoObservable } from "mobx";

class CarMakePageStore {
  carMakes = [
    {id: 1, name: 'Acura'},
    {id: 2, name: 'Alfa Romeo'},
    {id: 3, name: 'Aston Martin'},
    {id: 4, name: 'Audi'},
    {id: 5, name: 'Bentley'},
  ];

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
