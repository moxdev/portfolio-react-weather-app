import React, { Component } from "react";
import logo from "../assets/logo.svg";

class MadeWith extends Component {
  render() {
    return (
      <div className="made-with">
        <img src={logo} className="app-logo" alt="logo" />
      </div>
    );
  }
}

export default MadeWith;
