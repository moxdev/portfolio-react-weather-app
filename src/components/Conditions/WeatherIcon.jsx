import React, { Component } from "react";
import PropTypes from "prop-types";

class WeatherIcon extends Component {
  displayWeatherIcon = () => {
    const iconID = this.props.weatherIcon;
    const iconPath = window.location.origin + "/imgs/icons/";

    switch (iconID) {
      case "01d":
        return <img src={`${iconPath}Sun.svg`} alt="Clear Skies icon" />;
      case "01n":
        return <img src={`${iconPath}Moon-Full.svg`} alt="Clear Skies icon" />;
      case "02d":
        return <img src={`${iconPath}Cloud-Sun.svg`} alt="Few Clouds icon" />;
      case "02n":
        return <img src={`${iconPath}Cloud-Moon.svg`} alt="Few Clouds icon" />;
      case "03d":
        return <img src={`${iconPath}Cloud.svg`} alt="Scattered Clouds icon" />;
      case "03n":
        return <img src={`${iconPath}Cloud.svg`} alt="Scattered Clouds icon" />;
      case "04d":
        return <img src={`${iconPath}Cloud.svg`} alt="Broken Clouds icon" />;
      case "04n":
        return <img src={`${iconPath}Cloud.svg`} alt="Broken Clouds icon" />;
      case "09d":
        return <img src={`${iconPath}Cloud-Rain.svg`} alt="Shower Rain icon" />;
      case "09n":
        return <img src={`${iconPath}Cloud-Rain.svg`} alt="Shower Rain icon" />;
      case "10d":
        return <img src={`${iconPath}Cloud-Rain-Sun.svg`} alt="Rain icon" />;
      case "10n":
        return <img src={`${iconPath}Cloud-Rain-Moon.svg`} alt="Rain icon" />;
      case "11d":
        return (
          <img
            src={`${iconPath}Cloud-Thunderstorm.svg`}
            alt="Thunderstorm icon"
          />
        );
      case "11n":
        return (
          <img
            src={`${iconPath}Cloud-Thunderstorm.svg`}
            alt="Thunderstorm icon"
          />
        );
      case "13d":
        return <img src={`${iconPath}Cloud-Snow.svg`} alt="Snow icon" />;
      case "13n":
        return <img src={`${iconPath}Cloud-Snow.svg`} alt="Snow icon" />;
      case "50d":
        return <img src={`${iconPath}Cloud-Mist.svg`} alt="Mist icon" />;
      case "50n":
        return <img src={`${iconPath}Cloud-Mist.svg`} alt="Mist icon" />;
      default:
        return null;
    }
  };

  render() {
    return <div className="weather-icon">{this.displayWeatherIcon()}</div>;
  }
}

export default WeatherIcon;

WeatherIcon.propTypes = {
  weatherIcon: PropTypes.string.isRequired
};
