import React, { Component } from "react";
import PropTypes from "prop-types";

class Location extends Component {
  render() {
    const address = this.props.address;
    const lat = this.props.location.lat;
    const lng = this.props.location.lng;

    return (
      <section className="location">
        <h2>Your Current Location</h2>

        <div className="address">
          <p>{address}*</p>
        </div>

        <div className="coordinates">
          <span>Lattitude: {lat}</span>
          <span>Longitude: {lng}</span>
        </div>

        <p className="disclaimer">*Addresses are approximate</p>
      </section>
    );
  }
}

export default Location;

Location.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number
};
