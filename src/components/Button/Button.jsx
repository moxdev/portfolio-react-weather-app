import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const classes = this.props.classes;
    const func = this.props.func;
    const text = this.props.text;
    const styles = {
      backgroundColor: "black",
      color: "#fff",
      padding: ".25em 1em",
      border: "none"
    };
    return (
      <button className={classes} onClick={func} style={styles}>
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
