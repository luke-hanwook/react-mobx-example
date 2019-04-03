import React, { Component } from "react";
import DevTools from "mobx-react-devtools";
import Counter from "./First/Counter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <DevTools position="topRight" />
      </div>
    );
  }
}

export default App;
