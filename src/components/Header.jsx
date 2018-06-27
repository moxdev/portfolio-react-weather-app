import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const address = this.props.address;
    const city = address.city;
    const state = address.state;
    const zip = address.zip;
    const displayAddress = `${city} , ${state} ${zip}`;
    const title = this.props.title;

    return (
      <header className="app-header">
        {title ? <h1 className="app-title">{title}</h1> : null}

        {city ? <div className="header-address">{displayAddress}</div> : null}
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string
  }),
  title: PropTypes.string
};
