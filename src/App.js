import React, { Component } from "react";
import DevTools from "mobx-react-devtools";
// import Counter from "./First/Counter";
// import Starbucks from "./Second/Starbucks";
import ThirdContainer from "./Third/ThirdContatiner";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Starbucks /> */}
        <ThirdContainer />
        <DevTools position="topRight" />
      </div>
    );
  }
}

export default App;
