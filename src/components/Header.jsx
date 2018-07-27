import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const title = this.props.title;
    const address = this.props.address;
    const street = address.street;
    const state = address.state;
    const zip = address.zip;
    const country = address.country;
    const displayAddress = `${street}, ${state} ${zip} ${country}`;

    return (
      <header className="app-header">
        {title ? (
          <h1 className="app-title font-effect-outline">{title}</h1>
        ) : null}

        {street ? <div className="header-address">{displayAddress}</div> : null}
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  address: PropTypes.shape({
    street: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    country: PropTypes.string,
    displayAddress: PropTypes.string
  }),
  title: PropTypes.string
};
