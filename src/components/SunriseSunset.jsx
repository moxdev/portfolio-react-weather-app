import React, { Component } from "react";
import PropTypes from "prop-types";
import sunriseImg from "../assets/weather-icons/sunrise.svg";
import sunsetImg from "../assets/weather-icons/sunset.svg";

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
      <section className="sunrise-sunset">
        {sunrise === null ? null : (
          <div className="sunrise">
            <img src={sunriseImg} alt="Yellow sunrise icon" />
            <span>Sunrise: {this.formatSunriseTime(sunrise)}AM</span>
          </div>
        )}
        {sunset === null ? null : (
          <div className="sunset">
            <img src={sunsetImg} alt="Yellow sunset icon" />
            <span>Sunset: {this.formatSunsetTime(sunset)}PM</span>
          </div>
        )}
      </section>
    );
  }
}

export default SunriseSunset;

SunriseSunset.propTypes = {
  sunrise: PropTypes.number,
  sunset: PropTypes.number
};
