import React, { Component } from "react";
import DisplayTemperature from "./DisplayTemperature";
import Button from "../Button/Button";
import WeatherConditions from "./WeatherConditions";

class Temperature extends Component {
  render() {
    const temp = this.props.temp;
    const displayCelsius = this.props.displayCelsius;
    const displayFahrenheit = this.props.displayFahrenheit;
    const displayKelvin = this.props.displayKelvin;
    const showC = this.props.degrees.showC;
    const showF = this.props.degrees.showF;
    const showK = this.props.degrees.showK;
    const weather = this.props.weather;
    const humidity = this.props.humidity;

    return (
      <div className="temperature">
        <DisplayTemperature
          temp={temp}
          showC={showC}
          showF={showF}
          showK={showK}
        />
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
      </div>
    );
  }
}

export default Temperature;
