import React, { Component } from "react";

class Location extends Component {
  render() {
    const address = this.props.address;
    const lat = this.props.location.lat;
    const lng = this.props.location.lng;
    let displayLocation;

    if (lat || lng) {
      displayLocation = `Lattitude: ${lat}, Longitude: ${lng}`;
    } else {
      displayLocation = null;
    }

    return (
      <div className="location">
        <h3>Current Location</h3>
        <div className="address">
          <p>{address}</p>
          <small>
            <em>*Addresses are approximate and may not be correct</em>
          </small>
        </div>
        <div className="coordinates">
          <p>{displayLocation}</p>
        </div>
      </div>
    );
  }
}

export default Location;
