import ThirdStore from "./Third/store/ThirdStore";
import FourthStore from "./Fourth/store/FourthStore";
import FifthStore from "./Fifth/store/FifthStore";

export default class Store {
  constructor() {
    this.third = new ThirdStore(this);
    this.fourth = new FourthStore(this);
    this.fifth = new FifthStore(this);
  }
}
