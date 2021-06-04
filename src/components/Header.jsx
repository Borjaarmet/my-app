import React, { Component } from "react";
import logo from "../images/logo.svg";
// import logoIronhack from "../images/ironhack-logo.svg";
// import menuTop from "../images/menu-top.svg";

class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <img src={logoIronhack} alt="logoIronhack" />
        <img src={menuTop} alt="menuTop" /> */}

        <div className="header-text">
          <h1>Say hello to React JS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button>Awesome!</button>
        </div>
        <div className="image-logo">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    );
  }
}

export default Header;
