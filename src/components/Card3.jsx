import React, { Component } from "react";
import logo3 from "../images/icon3.png";

class Card3 extends Component {
  render() {
    return (
      <div className="card">
        <img className="icon" src={logo3} alt="logo" />
        <h2>Single-Way</h2>
        <p>A set of inmutable values are passed to the component´s</p>
      </div>
    );
  }
}

export default Card3;
