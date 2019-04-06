export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  @computed
  get introduce() {
    return `내 이름은 ${name}이고 ${age}살 입니다.`;
  }
}
