import React, { Component } from "react";

class SunriseSunset extends Component {
  formatSunriseTime = sunrise => {
    const date = new Date(sunrise * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };

  formatSunsetTime = sunset => {
    const date = new Date(sunset * 1000);
    const hours = date.getHours() - 12;
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };
  render() {
    const sunrise = this.props.sunrise;
    const sunset = this.props.sunset;

    return (
      <div className="sunrise-sunset">
        {sunrise === null ? null : (
          <span>Sunrise is at {this.formatSunriseTime(sunrise)}AM</span>
        )}
        {sunset === null ? null : (
          <span>Sunset is at {this.formatSunsetTime(sunset)}PM</span>
        )}
      </div>
    );
  }
}

export default SunriseSunset;
