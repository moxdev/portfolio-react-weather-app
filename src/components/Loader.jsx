import React from "react";
import spinner from "../assets/loading.svg";

const Loader = () => (
  <div className="loading-spinner">
    <img src={spinner} alt="yellow circles spinning placeholder" />
    <p>Your weather conditions are loading...</p>
  </div>
);

export default Loader;
