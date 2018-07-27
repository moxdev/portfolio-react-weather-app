import React, { Component } from "react";
import PropTypes from "prop-types";

import sun from "../../assets/weather-icons/Sun.svg";
import moonFull from "../../assets/weather-icons/Moon-Full.svg";
import cloudSun from "../../assets/weather-icons/Cloud-Sun.svg";
import cloudMoon from "../../assets/weather-icons/Cloud-Moon.svg";
import cloud from "../../assets/weather-icons/Cloud.svg";
import cloudRain from "../../assets/weather-icons/Cloud-Rain.svg";
import cloudRainSun from "../../assets/weather-icons/Cloud-Rain-Sun.svg";
import cloudRainMoon from "../../assets/weather-icons/Cloud-Rain-Moon.svg";
import cloudThunderstorm from "../../assets/weather-icons/Cloud-Thunderstorm.svg";
import cloudSnow from "../../assets/weather-icons/Cloud-Snow.svg";
import cloudMist from "../../assets/weather-icons/Cloud-Mist.svg";

class WeatherIcon extends Component {
  displayWeatherIcon = () => {
    const iconID = this.props.weatherIcon;

    switch (iconID) {
      case "01d":
        return <img src={sun} alt="Clear skies sun icon" />;
      case "01n":
        return <img src={moonFull} alt="Clear skies moon icon" />;
      case "02d":
        return <img src={cloudSun} alt="Few clouds sun icon" />;
      case "02n":
        return <img src={cloudMoon} alt="Few clouds moon icon" />;
      case "03d":
        return <img src={cloud} alt="Scattered clouds icon" />;
      case "03n":
        return <img src={cloud} alt="Scattered clouds icon" />;
      case "04d":
        return <img src={cloud} alt="Broken clouds icon" />;
      case "04n":
        return <img src={cloud} alt="Broken clouds icon" />;
      case "09d":
        return <img src={cloudRain} alt="Shower rain icon" />;
      case "09n":
        return <img src={cloudRain} alt="Shower rain icon" />;
      case "10d":
        return <img src={cloudRainSun} alt="Cloud rain sun icon" />;
      case "10n":
        return <img src={cloudRainMoon} alt="Cloud rain moon icon" />;
      case "11d":
        return <img src={cloudThunderstorm} alt="Cloud thunderstorm icon" />;
      case "11n":
        return <img src={cloudThunderstorm} alt="Cloud thunderstorm icon" />;
      case "13d":
        return <img src={cloudSnow} alt="Cloud snow icon" />;
      case "13n":
        return <img src={cloudSnow} alt="Cloud snow icon" />;
      case "50d":
        return <img src={cloudMist} alt="Cloud mist icon" />;
      case "50n":
        return <img src={cloudMist} alt="Cloud mist icon" />;
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
