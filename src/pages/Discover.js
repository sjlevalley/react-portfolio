import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";

class Discover extends Component {


  render() {
    return (
      <div>
        <h1 className="text-center">View My Projects</h1>
        <Card />
      </div>
    );
  }
}

export default Discover;
