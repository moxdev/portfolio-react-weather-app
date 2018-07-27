import React, { Component } from "react";
import logo from "../assets/react-logo.svg";

class BuiltWith extends Component {
  render() {
    return (
      <section className="look-at-me">
        <div className="built-with">
          <span>Built with ReactJS: </span>
          <img src={logo} className="app-logo" alt="logo" />
        </div>
        <div className="repo">
          To view this project's GitHub repo click{" "}
          <a
            href="https://github.com/moxdev/portfolio-react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>.
        </div>
      </section>
    );
  }
}

export default BuiltWith;
