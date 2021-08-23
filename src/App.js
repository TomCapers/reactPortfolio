import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import projects from "./projects.json"



function App() {
  return (
   
      <div>
      <Header/>
    
        <div id="about-me">
        <h2>About Me</h2>
          <p>Experienced financial services professional and UCLA Coding Boot Camp graduate motivated to build a career in the web development industry. Highly organized, results oriented professional with talent for balancing production needs with customer service and efficiency. Recognized for ability to lead and guide operating units while increasing technical expertise, skills and knowledge of staff. Excels at learning and applying new skills in fast paced and demanding environments. Strong team player that is also able to work independently on projects.</p>
        </div>
        <h2>Recent Projects</h2>

        <Wrapper>
      <Project
        name={projects[0].name}
        image={projects[0].image}
        occupation={projects[0].occupation}
        github={projects[0].github}
        />
      <Project
        name={projects[1].name}
        image={projects[1].image}
        occupation={projects[1].occupation}
        github={projects[1].github}
        />
      <Project
        name={projects[2].name}
        image={projects[2].image}
        occupation={projects[2].occupation}
        github={projects[2].github}
        />
      <Project
      name={projects[3].name}
      image={projects[3].image}
      occupation={projects[3].occupation}
      github={projects[3].github}
      />
      <Project
      name={projects[4].name}
      image={projects[4].image}
      occupation={projects[4].occupation}
      github={projects[4].github}
      />
      <Project
      name={projects[5].name}
      image={projects[5].image}
      occupation={projects[5].occupation}
      github={projects[5].github}
      />
    </Wrapper>
      <Footer/>
      </div>
    
  );
}

export default App;
