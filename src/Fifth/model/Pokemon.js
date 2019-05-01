import { extendObservable } from "mobx";

class Pokemon {
  constructor(data) {
    extendObservable(this, data);
  }
}

export default Pokemon;
