import React from "react";
import "../styles/Footer.css";

function Footer() {
    return (
        <div>
        <footer id="contact-me">
        <h2>Contact Me</h2>
        <image src="Capture.png" alt="my picture"></image>
            <ul>
                <li><a href= "mailto: tompcapers@gmail.com">Email</a></li>
                <li><a href= "https://www.linkedin.com/in/tom-capers-a0688711/">LinkedIn</a></li>
                <li><a href= "https://github.com/TomCapers">GitHub Profile</a></li>
            </ul>
    </footer>
    </div>
    );
  }
  
  export default Footer;