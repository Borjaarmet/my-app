import React, { Component } from "react";
import logo1 from "../images/icon1.png";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="icon" src={logo1} alt="logo" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs</p>
      </div>
    );
  }
}

export default Card;
