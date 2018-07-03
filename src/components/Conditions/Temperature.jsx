import React, { Component } from "react";
import PropTypes from "prop-types";
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
        <div className="button-wrapper">
          <Button
            active={showF}
            classes="fahrenheit"
            func={displayFahrenheit}
            text="Fahrenheit"
          />
          <Button
            active={showC}
            classes="celsius"
            func={displayCelsius}
            text="Celsius"
          />
          <Button
            active={showK}
            classes="kelvin"
            func={displayKelvin}
            text="Kelvin"
          />
        </div>
      </div>
    );
  }
}

export default Temperature;

Temperature.propTypes = {
  displayCelsius: PropTypes.func.isRequired,
  displayFahrenheit: PropTypes.func.isRequired,
  displayKelvin: PropTypes.func.isRequired,
  humidity: PropTypes.number.isRequired,
  showC: PropTypes.bool,
  showF: PropTypes.bool,
  showK: PropTypes.bool,
  temp: PropTypes.number.isRequired,
  weather: PropTypes.object.isRequired
};
