import React from "react";
import "../styles/Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <div>
        <footer id="contact-me">
        <h5>Find Me Here</h5>
        <image src="Capture.png" alt="my picture"></image>
            <ul>
                <li><a href= "mailto: tompcapers@gmail.com"><FaRegEnvelope /></a></li>
                <li><a href= "https://www.linkedin.com/in/tom-capers-a0688711/"><FaLinkedin /></a></li>
                <li><a href= "https://github.com/TomCapers"><FaGithub /></a></li>
            </ul>
    </footer>
    </div>
    );
  }
  
  export default Footer;