import React, { Component } from "react";

class WeatherConditions extends Component {
  render() {
    const humidity = this.props.humidty;
    return (
      <div className="weather-conditions">
        <p>
          {this.props.weather.main}, {this.props.weather.description}
        </p>

        {if(humidity !==null) {
          return <p>Humidity: {humidity}%</p>
        }}


      </div>
    );
  }
}

export default WeatherConditions;
