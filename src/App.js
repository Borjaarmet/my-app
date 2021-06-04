import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
        </div>
        <div className="container2">
          <Card />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
    );
  }
}

export default App;
/*
{
   <div className="box-1">
        <div className="nav-bar">
          <img
            className="ironhack-logo"
            src={logoIronhack}
            alt="logoIronhack"
          />
          <img className="menu-top" src={menuTop} alt="menutop" />
        </div>
        <img className="react-logo" src={logo} alt="reactLogo" />
        <div className="text">
          {title}
          {text}
          <h3 className="button">Awesome!</h3>
        </div>
      </div>
      <div className="container">
        <Card title="Borja" />

        <div className="box-icon">
          <img className="icons" src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p></p>
        </div>
        <div className="box-icon">
          <img className="icons" src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p></p>
        </div>
        <div className="box-icon">
          <img className="icons" src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p></p>
        </div>
        <div className="box-icon">
          <img className="icons" src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p></p>
        </div>
      </div>
    }
     */
