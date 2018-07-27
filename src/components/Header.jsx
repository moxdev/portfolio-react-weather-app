import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const address = this.props.address;
    const displayAddress = address.formattedAddress;
    const title = this.props.title;

    return (
      <header className="app-header">
        {title ? (
          <h1 className="app-title font-effect-outline">{title}</h1>
        ) : null}

        {displayAddress ? (
          <div className="header-address">{displayAddress}</div>
        ) : null}
      </header>
    );
  }
}

export default Header;

Header.propTypes = {
  address: PropTypes.shape({
    displayAddress: PropTypes.string
  }),
  title: PropTypes.string
};
