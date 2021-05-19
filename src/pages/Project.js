import React, { Component } from "react";
import Card from "../components/Card";
import employeeDirectoryPic from "../utils/images/employeeDirectoryPic.png"




class Project extends Component {


  render() {
    return (
      <div>
        <h1 className="text-center p-2">View My Projects</h1>
        <Card src={employeeDirectoryPic} />
      </div>
    );
  }
}

export default Project;
