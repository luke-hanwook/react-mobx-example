import axios from "axios";

class FifthRepository {
  URL = "https://pokeapi.co/api/v2";

  fetch = id => {
    return axios.get(`${this.URL}/pokemon/${id}`);
  };
}

export default new FifthRepository();
