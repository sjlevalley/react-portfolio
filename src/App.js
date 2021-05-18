import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Project from "./pages/Project";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero"


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
          <h1>Welcome to My Profile</h1>
        </Hero>
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
