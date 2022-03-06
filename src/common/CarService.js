import { API_URL } from './consts'

class CarService {
  getCar(id) {
    return fetch(`${API_URL}/cars/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    }).then((res) => res.json());
  }

  getCars() {
    return fetch(`${API_URL}/cars`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    }).then((res) => res.json());
  }

  createCar({ makeId, model }) {
    return fetch(`${API_URL}/cars`, {
      method: "POST",
      body: JSON.stringify({ makeId, model }),
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => res.json());
  }

  deleteCar(id) {
    return fetch(`${API_URL}/cars/${id}`, {
      method: "DELETE"
    }).then((res) => res.json());
  }

  editCar({ id, makeId, model }) {
    return fetch(`${API_URL}/cars/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ makeId, model }),
      headers: {
        "content-type": "application/json"
      }
    }).then((res) => res.json());
  }
}

export default CarService;