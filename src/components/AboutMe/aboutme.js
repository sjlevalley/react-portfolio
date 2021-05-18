import React from "react";
import Image from "./MeImage.png"


function AboutMe() {
    return (
        <div className="container-fluid border border-dark" id="about">
            <div className="row">
                <div className="col-3 border border-dark"><h3>About Me</h3></div>
                <div className="col border border-dark">
                    <p>
                        <img
                            src={Image}
                            alt="A guy holding a fish"
                            className="IDImage float-left p-2"
                        />
                        Hello! My name is Steve LeValley. I am currently working on getting my
                        Full-Stack Web Development certification from the University of
                        California, San Diego (UCSD). I previously received a B.S. Degree in
                        Marine Engineering Technology from the California Maritime Academy and I
                        currently live in San Diego.
                    </p>

                </div>
            </div>
        </div>
    );
}




export default AboutMe;