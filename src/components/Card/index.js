import React from "react";



function Card() {
  return (
    <>
      <div className="card" >
        {/* <img className="card-img-top" src="..." alt="" /> */}
        <div className="card-body">
          <h5 className="card-title">Employee Directory</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://sjlevalley.github.io/employee-directory/" target="_blank" rel="noreferrer" className="btn btn-primary">View the Employee Directory</a>
        </div>
      </div>
      <hr />
      <div className="card" >
        {/* <img className="card-img-top" src="..." alt="" /> */}
        <div className="card-body">
          <h5 className="card-title">Fitness Tracker</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://immense-peak-85651.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-primary">View the Fitness Tracker</a>
        </div>
      </div>
      <hr />
      <div className="card" >
        {/* <img className="card-img-top" src="..." alt="" /> */}
        <div className="card-body">
          <h5 className="card-title">Weather Dashboard</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://github.com/sjlevalley/WeatherDashboard" target="_blank" rel="noreferrer" className="btn btn-primary">View the Weather Dashboard</a>
        </div>
      </div>
    </>
  );
}






export default Card;