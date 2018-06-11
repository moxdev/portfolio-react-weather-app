import React, { Component } from "react";
import Header from "./Header";
import Location from "./Location";
import axios from "axios";

class App extends Component {
  state = {
    conditions: {},
    location: {
      lat: null,
      lon: null
    }
  };

  getAddress = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          location: {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  componentDidMount() {
    const url = "https://fcc-weather-api.glitch.me/api/current?";
    const lat = this.state.location.lat;
    const lon = this.state.location.lon;

    axios
      .get(url + "lat=" + lat + "&lon=" + lon)
      .then(response => {
        console.log("Successfull Response");
        console.log(url + "lat=" + lat + "&lon=" + lon);
        this.setState({
          conditions: {
            weather: response.data.weather,
            temp: response.data.main.temp,
            sunrise: response.data.sys.sunrise,
            sunset: response.data.sys.sunset
          }
        });
      })
      .catch(error => {
        console.log("Error: No Response");
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Header title="FCC React Weather App" />
        <Location location={this.state.location} onLoad={this.getAddress()} />
      </div>
    );
  }
}

export default App;
