import React, { Component } from "react";

class Temperature extends Component {
  displayTemperature = () => {
    const kelvin = this.props.temp;
    const celsius = kelvin - 273.15;
    const fahrenheit = kelvin * 1.8 - 459.67;

    if (!kelvin || kelvin === isNaN) {
      return null;
    } else {
      return <h3>{fahrenheit.toFixed(0)}&deg;F</h3>;
    }
  };

  showFahrenheit = e => {
    e.preventDefault();
    console.log("Fahren clicked");
    console.log(e.target.className);

    if (e.target.classList.contains("degrees")) {
      console.log("degrees");
    } else {
      console.log("failed");
    }
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
    const kelvin = this.props.temp;
    const celsius = kelvin - 273.15;
    const fahrenheit = kelvin * 1.8 - 459.67;

    return (
      <div className="temperature">
        <h2>Current Temperature</h2>

        <button onClick={this.showFahrenheit} className="degrees fahrenheit">
          Fahrenheit
        </button>
        <button onClick={this.showCelsius} className="degrees celsius">
          Celsius
        </button>
        <button onClick={this.showKelvin} className="degrees kelvin">
          Kelvin
        </button>
      </div>
    );
  }
}

export default Temperature;
