import React, { Component } from "react";
import logo from "../assets/logo.svg";

class Header extends Component {
  render() {
    const address = this.props.address;
    const city = address.city;
    const state = address.state;
    const zip = address.zip;
    const displayAddress = `${city} , ${state} ${zip}`;

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>

        {city === null ? null : (
          <div className="header-address">
            <span className="of">for</span>
            <span className="address">{displayAddress}</span>
          </div>
        )}
      </header>
    );
  }
}

export default Header;
