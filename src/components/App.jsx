import React, { Component } from "react";
import Header from "./Header";
import Location from "./Location";
import axios from "axios";

class App extends Component {
  state = {
    conditions: {},
    location: {},
    address: ""
  };

  getAddress = () => {
    const lat = this.state.location.lat;
    const lng = this.state.location.lng;
    const google = window.google;
    const geocoder = new google.maps.Geocoder();
    var latLng = new google.maps.LatLng(lat, lng);

    geocoder.geocode(
      { location: latLng },
      function(results, status) {
        if (status === "OK") {
          if (results[0]) {
            console.log(results[0].formatted_address);
            this.setState({ address: results[0].formatted_address });
          } else {
            window.alert("No results found");
          }
        }
      }.bind(this)
    );
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
                weather: response.data.weather[0],
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

    this.getAddress();
  }

  render() {
    return (
      <div className="App">
        <Header title="FCC React Weather App" />
        <Location location={this.state.location} address={this.state.address} />
      </div>
    );
  }
}

export default App;
