import React, { Component } from "react";
import DevTools from "mobx-react-devtools";
import Counter from "./First/Counter";
import Starbucks from "./Second/Starbucks";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        <Starbucks />
        <DevTools position="topRight" />
      </div>
    );
  }
}

export default App;
