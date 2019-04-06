import { computed, extendObservable } from 'mobx'

export default class Person {
  constructor(data) {
    extendObservable(this, data)
  }

  @computed
  get introduce() {
    return `내 이름은 ${this.name}이고 ${this.age}살 입니다.`;
  }
}
