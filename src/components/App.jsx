import React, { Component } from "react";
import Header from "./Header";
import Conditions from "./Conditions/Conditions";
import Location from "./Location";
import axios from "axios";

class App extends Component {
  state = {
    conditions: {
      weather: {
        id: null,
        main: null,
        description: null,
        icon: null
      },
      sys: {
        sunrise: null,
        sunset: null
      }
    },
    location: {},
    address: ""
  };

  getAddress = () => {
    const lat = this.state.location.lat;
    const lng = this.state.location.lng;
    const google = window.google ? window.google : {};
    const geocoder = new google.maps.Geocoder();
    const latLng = new google.maps.LatLng(lat, lng);

    geocoder.geocode(
      { location: latLng },
      function(results, status) {
        if (status === "OK") {
          if (results[0]) {
            console.log("GEOCODER: Status OK");

            this.setState({
              address: {
                formattedAddress: results[0].formatted_address,
                city: results[0].address_components[1].long_name,
                state: results[0].address_components[4].long_name,
                zip: results[0].address_components[6].long_name
              }
            });
          } else {
            window.alert("No results found");
          }
        }
      }.bind(this)
    );
  };

  formatUnixTime = unixTime => {
    const date = new Date(unixTime * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const formattedTime = `${hours}:${minutes}`;

    return formattedTime;
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const url = "https://api.openweathermap.org/data/2.5/weather?";
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const units = "metric";
        const API = "aee8fa9823413f068bcc925671aeb2ac";

        axios
          .get(`${url}lat=${lat}&lon=${lng}&units=${units}&APPID=${API}`)
          .then(response => {
            console.log("AXIOS: Successfull Response");

            this.setState(
              {
                conditions: {
                  weather: response.data.weather[0],
                  temp: response.data.main.temp,
                  humidity: response.data.main.humidity,
                  sunrise: response.data.sys.sunrise,
                  sunset: response.data.sys.sunset
                },
                location: {
                  lat,
                  lng
                }
              },
              this.getAddress
            );
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
        <Conditions
          conditions={this.state.conditions}
          formatUnixTime={this.formatUnixTime}
        />
        <Location location={this.state.location} address={this.state.address} />
      </div>
    );
  }
}

export default App;
