import React, { Component } from "react";
import Header from "./Header";
import Location from "./Location";
// import axios from "axios";

class App extends Component {
  state = {
    conditions: {},
    location: {},
    address: null
  };

  async componentDidMount() {
    try {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
          const url = await "https://fcc-weather-api.glitch.me/api/current?";
          const lat = await position.coords.latitude;
          const lng = await position.coords.longitude;
          const response = await fetch(`${url}lat=${lat}&lon=${lng}`);
          const json = await response.json();
          console.log(json);
          await this.setState({
            conditions: {
              weather: json.weather[0],
              temp: json.main.temp,
              sunrise: json.sys.sunrise,
              sunset: json.sys.sunset
            },
            location: {
              lat,
              lng
            }
          });
        });
      } else {
        alert("Geolocation is not supported by this browser.");
      }
      getAddress = () => {
        const lat = this.state.location.lat;
        const lng = this.state.location.lng;
        const google = window.google ? window.google : {};
        const geocoder = new google.maps.Geocoder();
        var latLng = new google.maps.LatLng(lat, lng);
        console.log(latLng);

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
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Header title="FCC React Weather App" />
        <Location location={this.state.location} address={this.state.address} />
        {/* <p>{this.state.conditions.coord.lat}</p> */}
      </div>
    );
  }
}

export default App;
