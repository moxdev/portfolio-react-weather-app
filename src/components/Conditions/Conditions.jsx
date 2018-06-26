import React, { Component } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";

class Conditions extends Component {
  render() {
    const weatherIcon = this.props.conditions.weather.icon;
    const weather = this.props.conditions.weather;
    const humidity = this.props.conditions.humidity;
    const temp = this.props.temp;
    const degrees = this.props.degrees;
    const displayCelsius = this.props.displayCelsius;
    const displayFahrenheit = this.props.displayFahrenheit;
    const displayKelvin = this.props.displayKelvin;

    return (
      <div className="weather">
        <WeatherIcon weatherIcon={weatherIcon} />
        <Temperature
          temp={temp}
          degrees={degrees}
          displayCelsius={displayCelsius}
          displayFahrenheit={displayFahrenheit}
          displayKelvin={displayKelvin}
          weather={weather}
          humidity={humidity}
        />
      </div>
    );
  }
}

export default Conditions;
