import React, { Component } from "react";
import ShowKelvin from "./ShowKelvin";
import ShowFahrenheit from "./ShowFahrenheit";
import ShowCelsius from "./ShowCelsius";

class Temperature extends Component {
  displayTemperature = () => {
    const temp = this.props.temp;
    const showC = this.props.degrees.showC;
    const showF = this.props.degrees.showF;
    const showK = this.props.degrees.showK;
    const displayCelsius = this.props.displayCelsius;
    const displayFahrenheit = this.props.displayFahrenheit;
    const displayKelvin = this.props.displayKelvin;
    const weather = this.props.weather;
    const humidity = this.props.humidity;

    if (showK && temp !== 0) {
      return (
        <ShowKelvin
          temp={temp}
          displayCelsius={displayCelsius}
          displayFahrenheit={displayFahrenheit}
          displayKelvin={displayKelvin}
          weather={weather}
          humidity={humidity}
        />
      );
    } else if (showC && temp !== 0) {
      return (
        <ShowCelsius
          temp={temp}
          displayCelsius={displayCelsius}
          displayFahrenheit={displayFahrenheit}
          displayKelvin={displayKelvin}
          weather={weather}
          humidity={humidity}
        />
      );
    } else if (showF && temp !== 0) {
      return (
        <ShowFahrenheit
          temp={temp}
          displayCelsius={displayCelsius}
          displayFahrenheit={displayFahrenheit}
          displayKelvin={displayKelvin}
          weather={weather}
          humidity={humidity}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    return <div className="temperature">{this.displayTemperature()}</div>;
  }
}

export default Temperature;
