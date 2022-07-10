import React from "react";

class StatefulGreetingWithCallback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      introduction: "Hello!",
      buttonText: "Exit!",
    };
  }

  handleClick() {
    this.setState(
      {
        introduction: "Goodbye!",
        buttonText: "Enter",
      },
      () => {
        // Place new state .log inside callback function in order for new state to be logged to console
        console.log("new state", this.state.introduction);
        console.log("new state", this.state.buttonText);
      }
    );
    // console.log(this.state.introduction);
    // console.log(this.state.buttonText);
  }

  render() {
    return (
      <div>
        <h1>
          {this.state.introduction} {this.props.greeting}
        </h1>
        <button onClick={() => this.handleClick()}>
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default StatefulGreetingWithCallback;
