import React from "react";
import "../styles/Project.css";

function Project(props) {
    return (
        <div className="card" id="projects">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>{props.name}</strong> 
            </li>
            <li>
                {props.occupation}
            </li>
            <li>
               <a href={props.github}>GitHub Link</a>
            </li>
            
          </ul>
        </div>
      </div>

    );
  }
  
  export default Project;