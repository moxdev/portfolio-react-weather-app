import React, { Component } from "react";
import Button from "../Button/Button";
import WeatherConditions from "./WeatherConditions";

class DisplayTemperature extends Component {
  displayDegrees = () => {
    const temp = this.props.temp;
    const showC = this.props.showC;
    const showF = this.props.showF;
    const showK = this.props.showK;

    if (showK && temp !== 0) {
      return <h2>{temp.toFixed(0)}&deg;K</h2>;
    } else if (showC && temp !== 0) {
      return <h2>{temp.toFixed(0)}&deg;C</h2>;
    } else if (showF && temp !== 0) {
      return <h2>{temp.toFixed(0)}&deg;F</h2>;
    } else {
      return null;
    }
  };
  render() {
    return <div className="temp">{this.displayDegrees()}</div>;
  }
}

export default DisplayTemperature;
