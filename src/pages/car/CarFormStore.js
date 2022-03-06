import { makeAutoObservable } from "mobx";
import CarService from '../../common/CarService'
import MakeService from '../../common/MakeService'

class CarFormStore {
  carMakeId = ''
  carModel = ''
  error = ''

  carMakes = []

  carService = new CarService()
  makeService = new MakeService()

  constructor() {
    makeAutoObservable(this);
  }

  async initialize() {
    this.carMakes = await this.makeService.getMakes()
  }  

  async handleSubmit(event) {
    event.preventDefault()
    if (this.carMakeId && this.carModel) {
      const newCar = await this.carService.createCar({
        makeId: Number(this.carMakeId),
        model: this.carModel
      });
      this.carMakeId = ''
      this.carModel = ''
      return newCar
    } else {
      this.error = 'Both fields are required.'
    }
  }

  setCarMakeId(carMakeId) {
    this.carMakeId = carMakeId
  }

  setCarModel(carModel) {
    this.carModel = carModel
  }

  setError(error) {
    this.error = error
  }
}

export default CarFormStore;
