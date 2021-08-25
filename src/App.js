import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import projects from "./projects.json";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";




function App() {
  return (
   <Router>
      <div>
      <Header/>
      <Route exact path="/" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        


{/*         
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
    </Wrapper> */}
      <Footer/>
      </div>
      </Router>
  );
}

export default App;
