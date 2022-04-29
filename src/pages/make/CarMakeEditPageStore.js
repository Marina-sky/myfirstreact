import { makeAutoObservable } from "mobx";
import MakeService from '../../common/MakeService'

class CarMakeEditPageStore {
  makeId
  newName = undefined
  error = ""
  history
  loading = false

  makeService = new MakeService()

  constructor() {
    makeAutoObservable(this);
  }

  async handleSubmit(event) {
    event.preventDefault()
    if (this.newName) {
      this.loading = true
      await this.makeService.editMake({
        id: this.makeId,
        name: this.newName
      })
      this.loading = false
      this.history.push('/makes')
    } else {
      this.error = 'This field is required.'
    }
  }

  async initialize(id, history) {
    this.loading = true
    const make = await this.makeService.getMake(id)
    this.loading = false
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