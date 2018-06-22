import React, { Component } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import WeatherConditions from "./WeatherConditions";

class Conditions extends Component {
  render() {
    const weatherIcon = this.props.conditions.weather.icon;
    const weather = this.props.conditions.weather;
    const humidity = this.props.conditions.humidity;
    const temp = this.props.temp;
    const degrees = this.props.degrees;
    const showCelsius = this.props.showCelsius;
    const showFahrenheit = this.props.showFahrenheit;
    const showKelvin = this.props.showKelvin;

    return (
      <div className="conditions">
        <WeatherIcon weatherIcon={weatherIcon} />
        <Temperature
          temp={temp}
          degrees={degrees}
          showCelsius={showCelsius}
          showFahrenheit={showFahrenheit}
          showKelvin={showKelvin}
        />
        <WeatherConditions weather={weather} humidity={humidity} />
      </div>
    );
  }
}

export default Conditions;
