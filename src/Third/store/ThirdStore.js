import { action, observable } from "mobx";
import Person from "../model/Person";

class ThirdStore {
  @observable person = {};
  @observable personList = [];
  @observable personMap = observable.map();

  @action
  setPersonObj() {
    this.person = new Person({name: "luke", age: 31});
  }

  @action
  setPersonList() {
    this.personList = [
      new Person({name: "kyun", age: 29}),
      new Person({name: "chang", age: 28}),
      new Person({name: "hong", age: 28}),
      new Person({name: "sun", age: 26})
    ];
  }

  @action
  setPersonMap() {
    this.personMap.set("dev1", [
      new Person({name: "kyun", age: 29}),
      new Person({name: "chang", age: 28}),
      new Person({name: "hong", age: 28}),
      new Person({name: "luke", age: 31})
    ]);

    this.personMap.set("dev2", [new Person({name: "sun", age: 26})]);
  }
}

export default ThirdStore;
