import ThirdStore from './Third/store/ThirdStore'
import FourthStore from './Fourth/store/FourthStore'

export default class Store {
  constructor() {
    this.third = new ThirdStore(this)
    this.fourth = new FourthStore(this)
  }
}