import { makeAutoObservable } from "mobx";
import MakeService from "../../common/MakeService";

class CarMakePageStore {
  makeService = new MakeService();
  carMakes = [];

  constructor() {
    makeAutoObservable(this);
  }

  async initialize() {
    this.carMakes = await this.makeService.getMakes()
  }

  createCarMake(make) {
    if (make) this.carMakes.push(make);
  }

  async deleteCarMake(id) {
    await this.makeService.deleteMake(id);
    this.carMakes = this.carMakes.filter((carMake) => carMake.id !== id);
  }

  async editCarMake(id, name) {
    const editedMake = await this.makeService.editMake({ id, name })
    this.carMakes = this.carMakes.map(make => make.id === id ? editedMake : make)
  }
}

export default CarMakePageStore;
