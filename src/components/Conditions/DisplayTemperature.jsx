import React, { Component } from "react";
import PropTypes from "prop-types";
import thermometer from "../../assets/weather-icons/thermometer.svg";

class DisplayTemperature extends Component {
  displayDegrees = () => {
    const temp = this.props.temp;
    const showC = this.props.showC;
    const showF = this.props.showF;
    const showK = this.props.showK;

    if (showK && temp !== 0) {
      return <span>{temp.toFixed(0)}&deg;K</span>;
    } else if (showC && temp !== 0) {
      return <span>{temp.toFixed(0)}&deg;C</span>;
    } else if (showF && temp !== 0) {
      return <span>{temp.toFixed(0)}&deg;F</span>;
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="degrees">
        {this.displayDegrees()}
        <img src={thermometer} alt="Thermometer icon" />
      </div>
    );
  }
}

export default DisplayTemperature;

DisplayTemperature.propTypes = {
  temp: PropTypes.number.isRequired,
  showC: PropTypes.bool,
  showF: PropTypes.bool,
  showK: PropTypes.bool
};
