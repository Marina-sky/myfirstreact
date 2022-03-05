import { makeAutoObservable } from "mobx";
import MakeService from "../../common/MakeService";
import CarService from "../../common/CarService";

class CarPageStore {
  carService = new CarService();
  makeService = new MakeService();
  cars = [];

  constructor() {
    makeAutoObservable(this);
  }

  async initialize() {
    const makes = await this.makeService.getMakes()
    const cars = await this.carService.getCars();
    this.cars = cars.map(car => {
      const make = makes.find(make => make.id === car.makeId)
      if (make) return { ...car, make: make.name }
      return car
    })
  }

  async createCar(car) {
    const make = await this.makeService.getMake(car.makeId)
    this.cars.push({ ...car, make: make.name });
  }

  async deleteCar(id) {
    await this.carService.deleteCar(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }

  editCar(id, newMake, newModel) {
    const carIndexAtId = this.cars.findIndex((car) => car.id === id);
    if (carIndexAtId > -1 && newMake && newModel) {
      this.cars[carIndexAtId] = { id, make: newMake, model: newModel };
    }
  }
}

export default CarPageStore;
