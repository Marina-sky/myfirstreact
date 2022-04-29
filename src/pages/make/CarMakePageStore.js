import { makeAutoObservable } from "mobx";
import MakeService from "../../common/MakeService";

class CarMakePageStore {
  makeService = new MakeService();
  carMakes = [];
  verifyDelete = undefined

  constructor() {
    makeAutoObservable(this);
  }

  async initialize() {
    this.carMakes = await this.makeService.getMakes()
  }

  createCarMake(make) {
    if (make) this.carMakes.push(make);
  }

  verifyDeleteCarMake(id) {
    this.verifyDelete = id
  }

  async deleteCarMake() {
    await this.makeService.deleteMake(this.verifyDelete);
    this.carMakes = this.carMakes.filter((carMake) => carMake.id !== this.verifyDelete);
  }

  cancelDeleteCarMake() {
    return this.verifyDelete = undefined
  }

  async editCarMake(id, name) {
    const editedMake = await this.makeService.editMake({ id, name })
    this.carMakes = this.carMakes.map(make => make.id === id ? editedMake : make)
  }
}

export default CarMakePageStore;
