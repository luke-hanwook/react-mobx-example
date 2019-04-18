import { observable, computed, action, configure } from 'mobx'

configure({
  enforceActions: "observed"
});
export default class FourthStore {
  @observable number = 0

  @computed
  get multiple() {
    return Math.pow(this.number, 2)
  }

  @action
  setNumber(num) {
    this.number = num;
  }
}