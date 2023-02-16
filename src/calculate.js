import React from "react";

class Calculate extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  addTwo = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 2
      };
    });
  };

  subtractTwo = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 2
      };
    });
  };

  double = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value * 2
      };
    });
  };

  divideByTwo = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value / 2
      };
    });
  };

  square = () => {
    this.setState((prevState) => {
      return {
        value: prevState.value * prevState.value
      };
    });
  };

  render() {
    return (
      <div>
        <hr />
        <input type="text" value={this.state.value} />
        <div id="buttons">
          <button onClick={this.addTwo}>Add2!</button>
          <button onClick={this.square}>Square!</button>
          <button onClick={this.double}>Double!</button>
          <button onClick={this.divideByTwo}>Divideby2!</button>
          <button onClick={this.subtractTwo}>Subtract2!</button>
        </div>
      </div>
    );
  }
}

export default Calculate;
