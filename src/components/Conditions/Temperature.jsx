import React, { Component } from "react";
// eslint-disable-next-line
import celsiusIcon from "../../assets/icons/Degrees-Celcius.svg";
// eslint-disable-next-line
import fahrenheitIcon from "../../assets/icons/Degrees-Fahrenheit.svg";

class Temperature extends Component {
  displayTemperature = () => {
    const celsius = this.props.temp;
    const fahrenheit = celsius * 1.8 + 32;

    if (!celsius || celsius === isNaN) return null;

    if (celsius) {
      return (
        <React.Fragment>
          <span className="celsius">
            {celsius.toFixed(0)}&deg;C
            {/* <img src={celsiusIcon} alt="" /> */}
          </span>
          <span className="fahrenheit">
            {fahrenheit.toFixed(0)}&deg;F
            {/* <img src={fahrenheitIcon} alt="" /> */}
          </span>
        </React.Fragment>
      );
    }
  };
  render() {
    return (
      <div className="temperature">
        <h2>Current Temperature</h2>
        {this.displayTemperature()}
      </div>
    );
  }
}

export default Temperature;
