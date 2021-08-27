import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

function Header() {

  const location = useLocation();
    return (
      <header className="header">
        <h1>Tom Capers' Portfolio</h1>
        <nav>
            <ul>
            <li>
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Projects
            </Link>
            </li>
            <li>
            <Link to="/resume" className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
              Resume
            </Link>
            </li>
            <li>
            <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
              About Me
            </Link>
            </li>
            <li>
            <Link to="/contact" className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
              Contact
            </Link>
            </li>
            </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  