import { makeAutoObservable } from "mobx";
import MakeService from '../../common/MakeService'

class CarMakeEditPageStore {
  makeId
  newName = ""
  error = ""
  history

  makeService = new MakeService()

  constructor() {
    makeAutoObservable(this);
  }

  async handleSubmit(event) {
    event.preventDefault()
    if (this.newName) {
      await this.makeService.editMake({
        id: this.makeId,
        name: this.newName
      })
      this.history.push('/makes')
    } else {
      this.error = 'This field is required.'
    }
  }

  async initialize(id, history) {
    const make = await this.makeService.getMake(id)
    this.makeId = id
    this.newName = make.name
    this.history = history
  }

  setNewName(name) {
    this.newName = name
  }

  setError(error) {
    this.error = error
  }
}

export default CarMakeEditPageStore;