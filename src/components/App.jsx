import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Conditions from "./Conditions/Conditions";
import SunriseSunset from "./SunriseSunset";
import Location from "./Location";
import Loader from "./Loader";
import Footer from "./Footer";

class App extends Component {
  state = {
    location: {
      lat: null,
      lng: null
    },
    temp: {
      fahrenheit: 0,
      celsius: 0,
      kelvin: 0
    },
    degrees: {
      showC: false,
      showF: true,
      showK: false
    },
    displayTemperature: 0,
    conditions: {
      weather: {
        id: null,
        main: null,
        description: null,
        icon: null
      },
      humidity: null,
      sunrise: null,
      sunset: null
    },
    address: {
      formattedAddress: null,
      city: null,
      state: null,
      zip: null
    },
    loading: true
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
                city: results[0].address_components[2].long_name,
                state: results[0].address_components[5].long_name,
                zip: results[0].address_components[7].long_name
              }
            });
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
        const url = "https://api.openweathermap.org/data/2.5/weather?";
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const API = "aee8fa9823413f068bcc925671aeb2ac";
        const URL = `${url}lat=${lat}&lon=${lng}&APPID=${API}`;

        axios
          .get(URL)
          .then(response => {
            console.log("AXIOS: Successfull Response");

            this.setState(
              {
                conditions: {
                  weather: response.data.weather[0],
                  humidity: response.data.main.humidity,
                  sunrise: response.data.sys.sunrise,
                  sunset: response.data.sys.sunset
                },
                location: {
                  lat,
                  lng
                },
                temp: {
                  fahrenheit: response.data.main.temp * 1.8 - 459.67,
                  celsius: response.data.main.temp - 273.15,
                  kelvin: response.data.main.temp
                },
                displayTemperature: response.data.main.temp * 1.8 - 459.67,
                loading: false
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

  displayCelsius = e => {
    e.preventDefault();
    const celsius = this.state.temp.celsius;

    this.setState({
      displayTemperature: celsius,
      degrees: {
        showF: false,
        showK: false,
        showC: true
      }
    });
  };

  displayFahrenheit = e => {
    e.preventDefault();
    const fahrenheit = this.state.temp.fahrenheit;

    this.setState({
      displayTemperature: fahrenheit,
      degrees: {
        showF: true,
        showK: false,
        showC: false
      }
    });
  };

  displayKelvin = e => {
    e.preventDefault();
    const kelvin = this.state.temp.kelvin;

    this.setState({
      displayTemperature: kelvin,
      degrees: {
        showF: false,
        showK: true,
        showC: false
      }
    });
  };

  render() {
    return (
      <div className="weather-app">
        <Header
          title="Current Weather Conditions"
          address={this.state.address}
        />
        <main role="main">
          <div className="container">
            {this.state.loading ? (
              <Loader />
            ) : (
              <React.Fragment>
                <Conditions
                  conditions={this.state.conditions}
                  temp={this.state.displayTemperature}
                  degrees={this.state.degrees}
                  displayCelsius={this.displayCelsius}
                  displayFahrenheit={this.displayFahrenheit}
                  displayKelvin={this.displayKelvin}
                />
                <SunriseSunset
                  sunrise={this.state.conditions.sunrise}
                  sunset={this.state.conditions.sunset}
                />
                <Location
                  location={this.state.location}
                  address={this.state.address.formattedAddress}
                />
              </React.Fragment>
            )}
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
