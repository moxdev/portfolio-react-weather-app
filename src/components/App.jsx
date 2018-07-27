import React, { Component } from "react";
import axios from "axios";
import Header from "./Header";
import Conditions from "./Conditions/Conditions";
import SunriseSunset from "./SunriseSunset";
import Location from "./Location";
import Loader from "./Loader";
import Footer from "./Footer";
import BuiltWith from "./BuiltWith";
import Social from "./Social";

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
      street: null,
      state: null,
      zip: null,
      country: null
    },
    loading: true,
    showLoadingError: false
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const openweathermapURL =
          "https://api.openweathermap.org/data/2.5/weather";
        const openweathermapAPPID = "aee8fa9823413f068bcc925671aeb2ac";
        const loactionIQURL = "https://us1.locationiq.org/v1/reverse.php";
        const loactionIQToken = "d05ca04bbe6037";
        const getLocation = `${openweathermapURL}?lat=${lat}&lon=${lng}&APPID=${openweathermapAPPID}`;
        const getAddress = `${loactionIQURL}?key=${loactionIQToken}&lat=${lat}&lon=${lng}&format=json`;

        axios
          .get(getLocation)
          .then(response => {
            console.log("AXIOS: openweathermap.org successful response");

            this.setState({
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
            });

            axios.get(getAddress).then(response => {
              console.log("AXIOS: locationiq.org successful response");

              this.setState({
                address: {
                  formattedAddress: response.data.display_name,
                  street: response.data.address.road,
                  state: response.data.address.state,
                  zip: response.data.address.postcode,
                  country: response.data.address.country
                }
              });
            });
          })
          .catch(error => {
            console.log(`Error: No Response: ${error}`);
          });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    setTimeout(() => this.setState({ showLoadingError: true }), 20000);
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
              <Loader showLoadingError={this.state.showLoadingError} />
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
                  address={this.state.address}
                />
                <BuiltWith />
                <Social />
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
