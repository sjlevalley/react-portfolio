import React from "react";
import "./style.css";
import employeeDirectoryPic from "../../utils/images/employeeDirectoryPic.png"
import WeatherDash from "../../utils/images/WeatherDash.png"
import WorkDayScheduler from "../../utils/images/WorkDayScheduler.png"
import noteTaker from "../../utils/images/noteTaker.png"
import pwGenerator from "../../utils/images/pwGenerator.png"
import bestMexSD from "../../utils/images/BestMexSD.png"


function Card() {
  return (
    <div className="container-fluid cardContainer">
      <h1 className="text-center p-2 titleText">View My Projects</h1>
      <div className="row">
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={employeeDirectoryPic} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">A Full-Stack project demonstrating the use of React, Express, MongoDB, and the Random User API.</p>
              <div className="row d-flex justify-content-around">
                <a href="https://sjlevalley.github.io/employee-directory/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                <a href="https://github.com/sjlevalley/employee-directory" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={bestMexSD} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">BestMexSD</h5>
              <p className="card-text">A React App for San Diegans to View, Submit, and Rate their favorite local Taco Shops!</p>
              <div className="row d-flex justify-content-around">
                <a href="https://bestmexsd-appage.herokuapp.com/" target="_blank" rel="noreferrer noopener" className="btn btn-primary">View Project</a>
                <a href="https://github.com/tvnames/BestMexSD" target="_blank" rel="noreferrer noopener" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={WeatherDash} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Curious what the whether will be in your area? This Weather Dashboard allows users to get the 5-day forecast for any city!</p>
              <div className="row d-flex justify-content-around">
                <a href="https://sjlevalley.github.io/WeatherDashboard/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                <a href="https://github.com/sjlevalley/WeatherDashboard" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={WorkDayScheduler} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Workday Scheduler</h5>
              <p className="card-text">Need a way to schedule your workday? Use this Workday Scheduler to do just that.</p>
              <div className="row d-flex justify-content-around">
                <a href="https://sjlevalley.github.io/WorkDayScheduler/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                <a href="https://github.com/sjlevalley/WorkDayScheduler" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={noteTaker} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">Have a busy schedule for the week? Use this Note Taker app to keep track of anything you need to remember.</p>
              <div className="row d-flex justify-content-around">
                <a href="https://note-taker-00000001.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                <a href="https://github.com/sjlevalley/Note-Taker" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={pwGenerator} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">Don't get hacked! Use this Password Generator to ensure that you generate a solid password that fits your needs.</p>
              <div className="row d-flex justify-content-around">
                <a href="https://sjlevalley.github.io/PasswordGenerator/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                <a href="https://github.com/sjlevalley/PasswordGenerator" target="_blank" rel="noreferrer" className="btn btn-primary">View GitHub Repo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






export default Card;
