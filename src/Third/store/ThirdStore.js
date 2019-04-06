import { action, observable } from "mobx";
import Person from "../model/Person";

class ThirdStore {
  @observable person = {};
  @observable personList = [];
  @observable personMap = observable.map();

  @action
  setPersonObj() {
    this.person = new Person("luke", 31);
  }

  @action
  setPersonList() {
    this.personList = [
      new Person("kyun", 29),
      new Person("chang", 28),
      new Person("hong", 28),
      new Person("sun", 26)
    ];
  }

  @action
  setPersonMap() {
    personMap.set("dev1", [
      new Person("kyun", 29),
      new Person("chang", 28),
      new Person("hong", 28),
      new Person("luke", 31)
    ]);

    personMap.set("dev2", [new Person("sun", 26)]);
  }
}

export default ThirdStore;
