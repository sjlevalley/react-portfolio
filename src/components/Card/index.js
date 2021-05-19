import React from "react";
import "./style.css";
import employeeDirectoryPic from "../../utils/images/employeeDirectoryPic.png"
import fitnessTracker from "../../utils/images/fitnessTracker.png"
import WeatherDash from "../../utils/images/WeatherDash.png"
import WorkDayScheduler from "../../utils/images/WorkDayScheduler.png"
import noteTaker from "../../utils/images/noteTaker.png"
import pwGenerator from "../../utils/images/pwGenerator.png"


function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={employeeDirectoryPic} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Employee Directory</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://sjlevalley.github.io/employee-directory/" target="_blank" rel="noreferrer" className="btn btn-primary">View the Employee Directory</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={fitnessTracker} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Fitness Tracker</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://immense-peak-85651.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">View the Fitness Tracker</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={WeatherDash} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://github.com/sjlevalley/WeatherDashboard" target="_blank" rel="noreferrer" className="btn btn-primary">View the Weather Dashboard</a>
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
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://sjlevalley.github.io/WorkDayScheduler/" target="_blank" rel="noreferrer" className="btn btn-primary">Workday Scheduler</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={noteTaker} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://note-taker-00000001.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">View the Note Taker</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="col w-3">
          <div className="card" >
            <img className="card-img-top" src={pwGenerator} alt="Screenshot of App" />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="https://sjlevalley.github.io/PasswordGenerator/" target="_blank" rel="noreferrer" className="btn btn-primary">View the Password Generator</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}






export default Card;
