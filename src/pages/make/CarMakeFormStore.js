import { makeAutoObservable } from "mobx";
import MakeService from "../../common/MakeService";

class CarMakeFormStore {
  carMakeName = "";
  error = "";

  makeService = new MakeService();

  constructor() {
    makeAutoObservable(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.carMakeName) {
      const newMake = await this.makeService.createMake({
        name: this.carMakeName,
      });
      this.carMakeName = "";
      return newMake;
    } else {
      this.error = "This field is required.";
    }
  }

  setCarMakeName(name) {
    this.carMakeName = name;
  }

  setError(error) {
    this.error = error;
  }
}

export default CarMakeFormStore;
