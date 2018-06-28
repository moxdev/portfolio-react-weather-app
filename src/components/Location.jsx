import React, { Component } from "react";
import PropTypes from "prop-types";

class Location extends Component {
  render() {
    const address = this.props.address;
    const lat = this.props.location.lat;
    const lng = this.props.location.lng;

    return (
      <div className="location">
        <div className="address">
          <p>Current Location: {address}</p>
          <p className="disclaimer">
            *Addresses are approximate and may not be correct
          </p>
        </div>
        <div className="coordinates">
          <span>Lattitude: {lat}</span>
          <span>Longitude: {lng}</span>
        </div>
      </div>
    );
  }
}

export default Location;

Location.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
};
