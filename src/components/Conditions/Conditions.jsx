import React, { Component } from "react";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import WeatherConditions from "./WeatherConditions";
import SunriseSunset from "./SunriseSunset";

class Conditions extends Component {
  render() {
    return (
      <div className="conditions">
        <WeatherIcon weatherIcon={this.props.conditions.weather.icon} />
        <Temperature temp={this.props.conditions.temp} />
        <WeatherConditions
          weather={this.props.conditions.weather}
          humidity={this.props.conditions.humidity}
        />
        <SunriseSunset formatUnixTime={this.props.formatUnixTime} />
      </div>
    );
  }
}

export default Conditions;
