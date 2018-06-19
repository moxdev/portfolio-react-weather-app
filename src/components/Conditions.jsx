import React, { Component } from "react";

class Conditions extends Component {
  displayIcon = () => {
    const iconID = this.props.conditions.weather.icon;
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

  calculateTime = unixTime => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes}`;
    // const unixSunrise = this.props.conditions.sunrise;
    // const unixSunset = this.props.conditions.sunset;
    // const sunriseDate = new Date(unixSunrise * 1000);
    // const sunsetDate = new Date(unixSunrise * 1000);
    // console.log(sunriseDate.getHours());
    // console.log(sunsetDate);
    return formattedTime;
  };

  render() {
    const weather = this.props.conditions.weather;

    return (
      <div className="conditions">
        <h2>Conditions</h2>
        <div className="weather">
          {this.displayIcon()}
          <p>
            {weather.main}, {weather.description}
          </p>
        </div>
        {this.displayTemperature()}
        <p>Humidity: {this.props.conditions.humidity}%</p>

        {this.calculateTime(this.props.conditions.sunrise)}
      </div>
    );
  }
}

export default Conditions;
