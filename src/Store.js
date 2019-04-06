import ThirdStore from './Third/store/ThirdStore'

export default class Store {
  constructor() {
    this.third = new ThirdStore(this)
  }
}