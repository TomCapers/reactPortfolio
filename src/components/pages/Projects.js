import React from "react";
import Wrapper from "../Wrapper";
import Project from "../Project";
import projects from "../../projects.json";
import syntax from "../../styles/syntax.png";
import blog from "../../styles/blog.png";
import team from "../../styles/team.png";
import weather from "../../styles/weather.png";
import wiki from "../../styles/wiki.png";
import ecomm from "../../styles/ecomm.png";

function Projects() {
    return (
        <div className="back">
            <div className="title">
             <h2>Recent Projects</h2>
             </div>

<Wrapper>
<Project
name={projects[0].name}
image={syntax}
occupation={projects[0].occupation}
github={projects[0].github}
deploy={projects[0].deploy}
/>
<Project
name={projects[1].name}
image={blog}
occupation={projects[1].occupation}
github={projects[1].github}
deploy={projects[1].deploy}
/>
<Project
name={projects[2].name}
image={team}
occupation={projects[2].occupation}
github={projects[2].github}
deploy={projects[2].deploy}
/>
<Project
name={projects[3].name}
image={weather}
occupation={projects[3].occupation}
github={projects[3].github}
deploy={projects[3].deploy}
/>
<Project
name={projects[4].name}
image={wiki}
occupation={projects[4].occupation}
github={projects[4].github}
deploy={projects[4].deploy}
/>
<Project
name={projects[5].name}
image={ecomm}
occupation={projects[5].occupation}
github={projects[5].github}
deploy={projects[5].deploy}
/>
</Wrapper>
        </div>
    );
}

export default Projects;
