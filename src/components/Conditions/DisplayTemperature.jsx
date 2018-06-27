import React, { Component } from "react";

class DisplayTemperature extends Component {
  displayDegrees = () => {
    const temp = this.props.temp;
    const showC = this.props.showC;
    const showF = this.props.showF;
    const showK = this.props.showK;

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
    return <div className="degrees">{this.displayDegrees()}</div>;
  }
}

export default DisplayTemperature;

// document.querySelector(".celsius").classList.remove("active");
// document.querySelector(".kelvin").classList.toggle("active");
// document.querySelector(".fahrenheit").classList.remove("active");
// document.querySelector(".celsius").classList.toggle("active");
// document.querySelector(".kelvin").classList.remove("active");
// document.querySelector(".fahrenheit").classList.remove("active");
// document.querySelector(".celsius").classList.remove("active");
// document.querySelector(".kelvin").classList.remove("active");
// document.querySelector(".fahrenheit").classList.toggle("active");
