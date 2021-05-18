import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Welcome to My Profile</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              <img
                src=""
                alt="A guy holding a fish"
                className="IDImage float-left p-2"
              />
              Hello! My name is Steve LeValley. I am currently working on getting my
              Full-Stack Web Development certification from the University of
              California, San Diego (UCSD). I previously received a B.S. Degree in
              Marine Engineering Technology from the California Maritime Academy and I
              currently live in San Diego.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>

          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
