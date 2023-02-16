import React from "react";
import "./styles.css";
import Calculate from "./calculate";

class App extends React.Component {
  render() {
    return (
      <div className="calculator">
        <h1>2s Calculator</h1>
        <Calculate />
      </div>
    );
  }
}

export default App;
