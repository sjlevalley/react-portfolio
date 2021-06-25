import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import Project from "./pages/Project";
// import meImage from "./utils/images/MeImage.jpg"
// import shipImage from "./utils/images/shipImage.jpg"
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import NewHome from "./pages/NewHome/NewHome";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Hero from "./components/Hero"


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/react-portfolio">
            <Redirect to="/" />
          </Route>
          <Route exact path="/">
            <NewHome />
          </Route>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
