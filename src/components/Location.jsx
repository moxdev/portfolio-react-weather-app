import React, { Component } from "react";

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h3>Current Location</h3>
        <div className="address">
          <span>{this.props.address.city}, </span>
          <span>{this.props.address.state}</span>
          <span> {this.props.address.zip}</span>
        </div>
        <div className="coordinates">
          <p>
            {this.props.location.lat}, {this.props.location.lng}
          </p>
        </div>
      </div>
    );
  }
}

export default Location;
