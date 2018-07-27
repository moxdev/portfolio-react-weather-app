import React, { Component } from "react";
import github from "../assets/social/github-big-logo.svg";
import twitter from "../assets/social/twitter.svg";
import linkedin from "../assets/social/linkedin-logo.svg";

class Social extends Component {
  render() {
    return (
      <section className="social">
        <a
          href="https://github.com/moxdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="svg" src={github} alt="Follow me on GitHub" />
        </a>
        <a
          href="https://twitter.com/moxbiggs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Follow me on Twitter" />
        </a>
        <a
          href="https://www.linkedin.com/in/shanebiggs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="Follow me on LinkedIn" />
        </a>
      </section>
    );
  }
}

export default Social;
