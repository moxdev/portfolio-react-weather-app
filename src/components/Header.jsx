import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "../assets/logo.svg";

class Header extends Component {
  render() {
    const address = this.props.address;
    const city = address.city;
    const state = address.state;
    const zip = address.zip;
    const displayAddress = `${city} , ${state} ${zip}`;

    return (
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">{this.props.title}</h1>

        {city === null ? null : (
          <div className="header-address">{displayAddress}</div>
        )}
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  address: PropTypes.object.isRequired
};
