import React, { Component } from "react";
import PropTypes from "prop-types";

class WeatherIcon extends Component {
  displayWeatherIcon = () => {
    const iconID = this.props.weatherIcon;
    const iconPath = window.location.origin + "/imgs/icons/";

    switch (iconID) {
      case "01d":
        return <img src={`${iconPath}Sun.svg`} alt="Clear Skies" />;
      case "01n":
        return <img src={`${iconPath}Moon-Full.svg`} alt="Clear Skies" />;
      case "02d":
        return <img src={`${iconPath}Cloud-Sun.svg`} alt="Few Clouds" />;
      case "02n":
        return <img src={`${iconPath}Cloud-Moon.svg`} alt="Few Clouds" />;
      case "03d":
        return <img src={`${iconPath}Cloud.svg`} alt="Scattered Clouds" />;
      case "03n":
        return <img src={`${iconPath}Cloud.svg`} alt="Scattered Clouds" />;
      case "04d":
        return <img src={`${iconPath}Cloud.svg`} alt="Broken Clouds" />;
      case "04n":
        return <img src={`${iconPath}Cloud.svg`} alt="Broken Clouds" />;
      case "09d":
        return <img src={`${iconPath}Cloud-Rain.svg`} alt="Shower Rain" />;
      case "09n":
        return <img src={`${iconPath}Cloud-Rain.svg`} alt="Shower Rain" />;
      case "10d":
        return <img src={`${iconPath}Cloud-Rain-Sun.svg`} alt="Rain" />;
      case "10n":
        return <img src={`${iconPath}Cloud-Rain-Moon.svg`} alt="Rain" />;
      case "11d":
        return (
          <img src={`${iconPath}Cloud-Thunderstorm.svg`} alt="Thunderstorm" />
        );
      case "11n":
        return (
          <img src={`${iconPath}Cloud-Thunderstorm.svg`} alt="Thunderstorm" />
        );
      case "13d":
        return <img src={`${iconPath}Cloud-Snow.svg`} alt="Snow" />;
      case "13n":
        return <img src={`${iconPath}Cloud-Snow.svg`} alt="Snow" />;
      case "50d":
        return <img src={`${iconPath}Cloud-Mist.svg`} alt="Mist" />;
      case "50n":
        return <img src={`${iconPath}Cloud-Mist.svg`} alt="Mist" />;
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
