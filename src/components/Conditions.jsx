import React, { Component } from "react";

class Conditions extends Component {
  displayTemperature = () => {
    const celsius = this.props.conditions.temp;
    const fahrenheit = celsius * 1.8 + 32;

    if (!celsius) return null;

    if (celsius) {
      return (
        <div className="temperature">
          {celsius.toFixed(0)}&deg;C {fahrenheit.toFixed(0)}&deg;F
        </div>
      );
    }
  };

  render() {
    const weather = this.props.conditions.weather;

    return (
      <div className="conditions">
        <h2>Conditions</h2>
        <div className="weather">
          <img src={weather.icon} alt="weather-icon" />
          <p>
            {weather.main}, {weather.description}
          </p>
        </div>
        {this.displayTemperature()}
      </div>
    );
  }
}

export default Conditions;
