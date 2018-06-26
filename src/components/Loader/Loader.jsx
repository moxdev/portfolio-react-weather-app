import React from "react";
import spinner from "../../assets/loading.svg";

const Loader = () => (
  <div className="loading-spinner">
    <img src={spinner} alt="yellow circles spinning placeholder" />
  </div>
);

export default Loader;
