import React, { Component } from "react";
import logo4 from "../images/icon4.png";

class Card4 extends Component {
  render() {
    return (
      <div className="card">
        <img className="icon" src={logo4} alt="logo" />
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers</p>
      </div>
    );
  }
}

export default Card4;
