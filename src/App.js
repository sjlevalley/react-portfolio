import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
