import React, { Component } from "react";
import logo2 from "../images/icon2.png";

class Card2 extends Component {
  render() {
    return (
      <div className="card">
        <img className="icon" src={logo2} alt="logo" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state</p>
      </div>
    );
  }
}

export default Card2;
