import React, { Component } from "react";
import spinner from "../assets/loading.svg";
import sadFace from "../assets/error/smartphone-with-sad-face-on-screen.svg";
import warning from "../assets/error/warning.svg";

class Loader extends Component {
  render() {
    const showLoadingError = this.props.showLoadingError;

    while (showLoadingError === false) {
      return (
        <div className="loading-spinner">
          <img src={spinner} alt="yellow circles spinning placeholder" />
          <p>Your weather conditions are loading...</p>
        </div>
      );
    }

    return (
      <div className="loading-error">
        <h2>Oh No!</h2>
        <div className="error-image-container">
          <img
            className="warning"
            src={warning}
            alt="red circle yellow trianlge warning sign"
          />

          <span>&#61;</span>

          <img
            className="sad-face"
            src={sadFace}
            alt="red cell phone with sad face"
          />
        </div>

        <div className="error-message">
          <p>
            Sorry but we are unable to retreive your location. Either the
            location server is having issues, or there is something wrong with
            your internet connection.
          </p>
          <p>Please refresh your browser or try again later.</p>
        </div>
      </div>
    );
  }
}

export default Loader;
