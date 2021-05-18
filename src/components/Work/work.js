import React from "react";
import Card from "../Card/card";


function Work() {
    return (
        <div className="container-fluid border border-dark" id="myProjects">
            <div className="row">
                <div className="col-3 border border-dark">My Featured Projects</div>
                <div className="col border border-dark">
                    <Card />
                </div>
            </div>
        </div>
    );
}




export default Work;