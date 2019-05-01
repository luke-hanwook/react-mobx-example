import fifthRepository from "../repository/FifthRepository";
import Pokemon from "../model/Pokemon";
import { observable, action, configure, runInAction } from "mobx";

configure({
  enforceActions: "observed"
});
class FifthStore {
  @observable pokemon = {};

  @action
  async loadPokemon(id) {
    const { data } = await fifthRepository.fetch(id);
    runInAction(() => {
      this.pokemon = new Pokemon(data);
    });
  }
}

export default FifthStore;
