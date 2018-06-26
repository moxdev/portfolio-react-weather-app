import React, { Component } from "react";
import DisplayTemperature from "./DisplayTemperature";
import Button from "../Button/Button";
import WeatherDescription from "./WeatherDescription";

class Temperature extends Component {
  render() {
    const displayCelsius = this.props.displayCelsius;
    const displayFahrenheit = this.props.displayFahrenheit;
    const displayKelvin = this.props.displayKelvin;
    const humidity = this.props.humidity;
    const showC = this.props.degrees.showC;
    const showF = this.props.degrees.showF;
    const showK = this.props.degrees.showK;
    const temp = this.props.temp;
    const weather = this.props.weather;

    return (
      <div className="conditions">
        <DisplayTemperature
          temp={temp}
          showC={showC}
          showF={showF}
          showK={showK}
        />
        <WeatherDescription weather={weather} humidity={humidity} />
        <Button
          classes="fahrenheit"
          func={displayFahrenheit}
          text="Fahrenheit"
        />
        <Button classes="celsius" func={displayCelsius} text="Celsius" />
        <Button classes="kelvin" func={displayKelvin} text="Kelvin" />
      </div>
    );
  }
}

export default Temperature;
