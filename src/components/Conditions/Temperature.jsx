import React, { Component } from "react";

class Temperature extends Component {
  displayTemperature = () => {
    const kelvin = this.props.temp;
    const celsius = kelvin - 273.15;
    const fahrenheit = kelvin * 1.8 - 459.67;

    if (!kelvin || kelvin === isNaN) return null;

    if (kelvin) {
      return (
        <React.Fragment>
          <h2>Current Temperature</h2>
          <h3>{fahrenheit.toFixed(0)}&deg;F</h3>
          <button onClick={this.showFahrenheit} className="degrees fahrenheit">
            Fahrenheit
          </button>
          <button onClick={this.showCelsius} className="degrees celsius">
            Celsius
          </button>
          <button onClick={this.showKelvin} className="degrees kelvin">
            Kelvin
          </button>
        </React.Fragment>
      );
    }
  };

  showFahrenheit = e => {
    e.preventDefault();
    console.log("Fahren clicked");
  };
  showCelsius = e => {
    e.preventDefault();
    console.log("Celsius clicked");
  };
  showKelvin = e => {
    e.preventDefault();
    console.log("Kelvin clicked");
  };

  render() {
    return <div className="temperature">{this.displayTemperature()}</div>;
  }
}

export default Temperature;
