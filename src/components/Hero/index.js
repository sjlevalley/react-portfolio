import React from "react";
import "./style.css";


function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
      <h1 className="d-flex justify-content-end mr-4 heroText">Welcome to My Portfolio</h1>
      <p className="d-flex justify-content-end mr-4 heroText">Please View the Pages Below</p>
    </div>
  );
}

export default Hero;
