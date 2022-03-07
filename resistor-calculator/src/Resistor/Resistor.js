import React from "react";
import Band from "./Band";

class Resistor extends React.Component {
  render() {
    return (
      <div class="resistor">
        <div class="resistor-body">
          <Band id="first-band"></Band>
          <Band id="second-band"></Band>
          <Band id="third-band"></Band>
          <Band id="tolerence"></Band>
        </div>
      </div>
    );
  }
}

export default Resistor;
