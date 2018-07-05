import React, { Component } from "react";
import PropTypes from "prop-types";

class WeatherDescription extends Component {
  capitalizeString = str => {
    str = str.toString();
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  };

  render() {
    const humidity = this.props.humidity;
    const description = this.props.weather.description;

    return (
      <div className="weather-description">
        {description === null ? null : (
          <span className="desc">
            Conditions: <span>{this.capitalizeString(description)}</span>
          </span>
        )}

        {humidity === null ? null : (
          <span className="humidity">
            Humidity: <span>{humidity}&#37;</span>
          </span>
        )}
      </div>
    );
  }
}

export default WeatherDescription;

WeatherDescription.propTypes = {
  humidity: PropTypes.number,
  weather: PropTypes.shape({
    description: PropTypes.string.isRequired
  })
};
