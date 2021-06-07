import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import MeImage from "../utils/images/MeImage.jpg"
import "../../src/index.css";

function About(props) {
  return (
    <div className="container-fluid aboutContainer">
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <img
              src={MeImage}
              alt="Me holding a fish"
              className="IDImage float-left p-2"
            />
            <div className="container-fluid">

              <p>
                <strong>Introduction</strong> - Hello! My name is Steve LeValley. I am currently finishing up my certification for
              Full-Stack Web Development through the University of California, San Diego (UCSD)
            </p>
              <p>
                <strong>Professional Background</strong> - For the past decade, I have been heavily involved in many aspects of shipboard
              engineering related operations in both the Government and Private sectors as well as volunteering in the Navy Reserves.
            </p>
              <p>
                <strong>Skills</strong> - Thus far in the first few months of my career as a Web-Developer, I have had the opportunity
                to be exposed to gain experience with technical skills, languages, and processes such as React, Express, NoSQL, MySQL, and other
                Web-Development fundamentals.
            </p>
              <p>
                <strong>Education</strong> - Along with my Full-Stack Web Development certification, I currently hold a Bachelors
              of Science (B.S.) Degree in Marine Engineering from The California Maritime Academy, which is a university located
              in Vallejo, California and a part of the California State University System. I arrived at the California Maritime
              Academy after attending junior college in both San Diego, California and Santa Barbara, California. I am a San Diego
              native and attended high school at Valhalla High School in El Cajon, CA before beginning my college experience.
            </p>
              <p>
                <strong>Personal</strong> - I am a very driven individual and enjoy doing many different activities in my spare time. Those
              activities include, but are not limited to, travelling overseas, taking road trips here in the U.S., participating in athletic endeavors,
              learning about stocks and market economics, barbecuing, working out, taking advantage of our beaches here in San Diego, as well
              as maintaining and updating my website (one side benefit of taking this web development course). I am looking to continue gaining experience
              in the web development field and develop my skills as much as I can.
            </p>
            </div>

          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;