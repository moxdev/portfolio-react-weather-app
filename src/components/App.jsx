import React, { Component } from "react";
import Header from "./Header";
import Location from "./Location";
import axios from "axios";

class App extends Component {
  state = {
    conditions: {},
    location: {}
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const url = "https://fcc-weather-api.glitch.me/api/current?";
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        axios
          .get(`${url}lat=${lat}&lon=${lng}`)
          .then(response => {
            console.log("Successfull Response");
            this.setState({
              conditions: {
                weather: response.data.weather,
                temp: response.data.main.temp,
                sunrise: response.data.sys.sunrise,
                sunset: response.data.sys.sunset
              },
              location: {
                lat,
                lng
              }
            });
          })
          .catch(error => {
            console.log(`Error: No Response: ${error}`);
          });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="FCC React Weather App" />
        <Location location={this.state.location} />
      </div>
    );
  }
}

export default App;
