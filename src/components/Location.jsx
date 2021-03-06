import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h3>Current Location</h3>
        <div className="coordinates">
          <span>{this.props.location.lat}, </span>
          <span>{this.props.location.lon}</span>
        </div>
        <div className="address">Address</div>
      </div>
    );
  }
}

export default Location;
