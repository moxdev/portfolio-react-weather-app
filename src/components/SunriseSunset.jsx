import React, { Component } from "react";
import PropTypes from "prop-types";

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
          <span>Sunrise: {this.formatSunriseTime(sunrise)}AM</span>
        )}
        {sunset === null ? null : (
          <span>Sunset: {this.formatSunsetTime(sunset)}PM</span>
        )}
      </div>
    );
  }
}

export default SunriseSunset;

SunriseSunset.propTypes = {
  sunrise: PropTypes.number,
  sunset: PropTypes.number
};
