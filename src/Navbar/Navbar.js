import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="fixed-header">
      <nav>
        <div className="logo">
          <a href="https://ecityenergy.com/">
            {/* <img
              src="data:image/jpeg;base64,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"
              className="desktop-logo"
              alt="Electric City Energy Logo"
            /> */}
          </a>
          <a href="https://ecityenergy.com/">
            <img
              src="/src/images/ecity-logo-m.png"
              className="mobile-logo"
              alt="Electric City Energy Logo"
            />
          </a>
        </div>
        <ul>
          <li>
            <Link to="/power-saver" className="nav-link">
              Home
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/calculate" className="nav-link">
              Calculate
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
