import { API_URL } from "./consts";

class MakeService {
  getMakes() {
    return fetch(`${API_URL}/makes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  getMake(id) {
    return fetch(`${API_URL}/makes/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  createMake({ name }) {
    return fetch(`${API_URL}/makes`, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }

  deleteMake(id) {
    return fetch(`${API_URL}/makes/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  editMake({ id, name }) {
    return fetch(`${API_URL}/makes/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ name }),
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json());
  }
}

export default MakeService;
