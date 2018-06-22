import React, { Component } from "react";

class Temperature extends Component {
  displayTemperature = () => {
    const temp = this.props.temp;
    const showC = this.props.degrees.showC;
    const showF = this.props.degrees.showF;
    const showK = this.props.degrees.showK;

    console.log("C = " + showC);
    console.log("F = " + showF);
    console.log("K = " + showK);

    if (showK && temp !== 0) {
      return <p>{temp.toFixed(0)}&deg;K</p>;
    } else if (showC && temp !== 0) {
      return <p>{temp.toFixed(0)}&deg;C</p>;
    } else if (showF && temp !== 0) {
      return <p>{temp.toFixed(0)}&deg;F</p>;
    } else {
      return null;
    }
  };

  render() {
    const showCelsius = this.props.showCelsius;
    const showFahrenheit = this.props.showFahrenheit;
    const showKelvin = this.props.showKelvin;

    const styles = {
      backgroundColor: "black",
      color: "#fff",
      padding: ".25em 1em",
      border: "none"
    };

    return (
      <div className="temperature">
        <h2>Current Temperature</h2>
        {this.displayTemperature()}
        <button
          style={styles}
          onClick={showFahrenheit}
          className="degrees fahrenheit"
        >
          Fahrenheit
        </button>
        <button
          style={styles}
          onClick={showCelsius}
          className="degrees celsius"
        >
          Celsius
        </button>
        <button style={styles} onClick={showKelvin} className="degrees kelvin">
          Kelvin
        </button>
      </div>
    );
  }
}

export default Temperature;
