import { makeAutoObservable } from "mobx";
import CarService from '../../common/CarService'
import MakeService from '../../common/MakeService'

class CarEditPageStore {
  carId
  newMakeId = undefined;
  newModel = undefined;
  error = "";
  history
  loading = false

  carMakes = []

  carService = new CarService()
  makeService = new MakeService()

  constructor() {
    makeAutoObservable(this);
  }

  async handleSubmit(event) {
    event.preventDefault()
    if (this.newMakeId && this.newModel) {
      this.loading = true
      await this.carService.editCar({
        id: this.carId,
        makeId: Number(this.newMakeId),
        model: this.newModel
      });
      this.loading = false
      this.history.push("/cars");
    } else {
      this.error = "Both fields are required.";
    }
  }

  async initialize(id, history) {
    this.loading = true
    const makes = await this.makeService.getMakes()
    const car = await this.carService.getCar(id)
    this.loading = false
    const carMake = makes.find(make => make.id === car.makeId)
    this.carMakes = makes
    this.carId = id
    if (carMake) this.newMakeId = carMake.id
    this.newModel = car.model
    this.history = history
  }

  setNewMakeId(makeId) {
    this.newMakeId = makeId;
  }

  setNewModel(model) {
    this.newModel = model;
  }

  setError(error) {
    this.error = error;
  }
}

export default CarEditPageStore;
