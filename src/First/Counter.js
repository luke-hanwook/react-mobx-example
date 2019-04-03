import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";

@observer
class Counter extends Component {
  @observable count = 0;

  handleDec = _ => {
    this.count--;
  };

  handleInc = _ => {
    this.count++;
  };

  render() {
    return (
      <div>
        <div>Counter: {this.count}</div>
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
      </div>
    );
  }
}

export default Counter;
