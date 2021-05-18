import logo from './logo.svg';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Jumbotron from "./components/Jumbotron/jumbotron";
import AboutMe from "./components/AboutMe/aboutme";
import Work from "./components/Work/work";
import Contact from "./components/Contact/contact";
import './App.css';

function App() {
  return (
    <div className="container-fluid">

      <Router>
        <div className="App">
          <Navbar />
          <Jumbotron />
          <AboutMe />
          <Work />
          <Contact />


        </div>


      </Router>
    </div>
  );
}

export default App;
