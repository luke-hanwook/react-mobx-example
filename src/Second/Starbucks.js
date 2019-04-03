import React, { Component, Fragment } from "react";
import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Starbucks extends Component {
  @observable countryOfCode = "K";
  @observable americano = 4100;

  @computed
  get americanoOfJapan() {
    return (this.americano - 300) * 0.09;
  }

  @computed
  get americanoOfChina() {
    return (this.americano - 500) * 0.05;
  }

  @computed
  get americanoOfUSA() {
    return (this.americano + 100) * 0.009;
  }

  @computed
  get price() {
    switch (this.countryOfCode) {
      case "K":
        return `KRW ${this.americano}`;
      case "J":
        return `JPY ${this.americanoOfJapan}`;
      case "C":
        return `CNY ${this.americanoOfChina}`;
      case "U":
        return `USD ${this.americanoOfUSA}`;
      default:
        return "no price";
    }
  }

  @action
  setCountryCode = e => {
    const { name } = e.target;
    this.countryOfCode = name;
  };

  render() {
    return (
      <Fragment>
        <h1>아메리카노 가격: {this.price}</h1>
        <button name="K" onClick={this.setCountryCode}>
          한국
        </button>
        <button name="J" onClick={this.setCountryCode}>
          일본
        </button>
        <button name="C" onClick={this.setCountryCode}>
          중국
        </button>
        <button name="U" onClick={this.setCountryCode}>
          미국
        </button>
      </Fragment>
    );
  }
}

export default Starbucks;
