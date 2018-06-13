import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h3>Current Location</h3>
        <div className="coordinates">
          <span>{this.props.location.lat}, </span>
          <span>{this.props.location.lng}</span>
        </div>
        <div className="address">{this.props.address}</div>
      </div>
    );
  }
}

export default Location;
