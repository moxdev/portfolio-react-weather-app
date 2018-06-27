import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const active = this.props.active;
    const classes = this.props.classes;
    const func = this.props.func;
    const text = this.props.text;
    let styles;

    if (active) {
      styles = {
        color: "#e6e62e"
      };
    } else {
      styles = {
        color: "#FEFFFF"
      };
    }

    return (
      <button style={styles} className={classes} onClick={func}>
        {text}
      </button>
    );
  }
}

Button.propTypes = {
  func: PropTypes.func.isRequired,
  classes: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
