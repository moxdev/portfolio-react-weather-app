import React, { Component } from "react";
import Button from "../Button/Button";
import WeatherConditions from "./WeatherConditions";

class ShowKelvin extends Component {
  render() {
    const temp = this.props.temp;
    const displayCelsius = this.props.displayCelsius;
    const displayFahrenheit = this.props.displayFahrenheit;
    const displayKelvin = this.props.displayKelvin;
    const weather = this.props.weather;
    const humidity = this.props.humidity;

    return (
      <React.Fragment>
        <h2>{temp.toFixed(0)}&deg;K</h2>
        <WeatherConditions weather={weather} humidity={humidity} />
        <Button
          classes="degrees fahrenheit"
          func={displayFahrenheit}
          text="Fahrenheit"
        />
        <Button
          classes="degrees celsius"
          func={displayCelsius}
          text="Celsius"
        />
        <Button classes="degrees kelvin" func={displayKelvin} text="Kelvin" />
      </React.Fragment>
    );
  }
}

export default ShowKelvin;
