import React, { Component } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import WeatherConditions from "./WeatherConditions";

class Conditions extends Component {
  render() {
    const weatherIcon = this.props.conditions.weather.icon;
    const temp = this.props.conditions.temp;
    const weather = this.props.conditions.weather;
    const humidity = this.props.conditions.humidity;

    return (
      <div className="conditions">
        <WeatherIcon weatherIcon={weatherIcon} />
        <Temperature temp={temp} />
        <WeatherConditions weather={weather} humidity={humidity} />
      </div>
    );
  }
}

export default Conditions;
