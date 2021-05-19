import React from "react";
import { Link, NavLink } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the
// appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <Link className="navbar-brand" to="/about">
        Steve LeValley
      </Link>
      <div className="navbar-collapse collapse d-flex justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/project"
              className="nav-link"
              activeClassName="active"
            >
              My Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link" activeClassName="active">
              Contact Me
            </NavLink>
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
