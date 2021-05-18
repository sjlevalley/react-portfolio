import React from "react";
import { Link, NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#about">
                Steve LeValley
            </a>
            <div className="navbar-collapse collapse d-flex justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#about" className="nav-link" activeClassName="active">
                            About Me
            </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="#myProjects"
                            className="nav-link"
                            activeClassName="active"
                        >
                            My Projects
            </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" activeClassName="active">
                            Contact Me
            </a>
                    </li>
                    <li className="nav-item">
                        <a href="https://sjlevalley.github.io/Resume/" target="_blank" rel="noreferrer" className="nav-link" activeClassName="active">
                            Resume
            </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
