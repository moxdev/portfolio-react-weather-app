import React, { Component } from "react";

class WeatherConditions extends Component {
  render() {
    const humidity = this.props.humidity;
    const main = this.props.weather.main;
    const description = this.props.weather.description;
    const humidityDescription = `Humidity: ${humidity}%`;
    let weatherDescription;

    if (main || description) {
      weatherDescription = `${main}, ${description}`;
    } else {
      weatherDescription = null;
    }

    return (
      <div className="weather-conditions">
        <p className="weather-description">{weatherDescription}</p>
        {humidity === null ? null : (
          <p className="humidity">{humidityDescription}</p>
        )}
      </div>
    );
  }
}

export default WeatherConditions;
