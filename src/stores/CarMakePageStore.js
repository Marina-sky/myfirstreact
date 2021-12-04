import { makeAutoObservable } from 'mobx'

class CarMakePageStore {
  carMakes = []

  constructor() {
    makeAutoObservable(this)
  }

  createCarMake(name) {
    this.carMakes.push({ id: this.carMakes.length + 1, name });
  }

  deleteCarMake(id) {
    this.carMakes = this.carMakes.filter((carMake) => carMake.id !== id);
  }
}

export default CarMakePageStore;