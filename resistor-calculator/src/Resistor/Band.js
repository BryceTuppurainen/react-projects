import React from "react";

class Band extends React.Component {
  constructor(props) {
    super(props);
    this.state = { backgroundColor: "black" };
  }

  // Black, Brown, Red, Orange, Yellow, Green, Blue, Violet, Grey, White
  handler = () => {
    switch (this.state.backgroundColor) {
      case "black":
        this.setState({ backgroundColor: "brown" });
        break;
      case "brown":
        this.setState({ backgroundColor: "red" });
        break;
      case "red":
        this.setState({ backgroundColor: "orange" });
        break;
      case "orange":
        this.setState({ backgroundColor: "yellow" });
        break;
      case "yellow":
        this.setState({ backgroundColor: "green" });
        break;
      case "green":
        this.setState({ backgroundColor: "blue" });
        break;
      case "blue":
        this.setState({ backgroundColor: "violet" });
        break;
      case "violet":
        this.setState({ backgroundColor: "grey" });
        break;
      case "grey":
        this.setState({ backgroundColor: "white" });
        break;
      default:
        this.setState({ backgroundColor: "black" });
        break;
    }
    console.log(`Changing backgroundColor to ${this.state.backgroundColor}`);
  };

  render() {
    return (
      <div
        class="resistor-band"
        id={this.props.id}
        style={{ backgroundColor: this.state.backgroundColor }}
        onClick={() => this.handler()}
      ></div>
    );
  }
}

export default Band;
