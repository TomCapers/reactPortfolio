import React from "react";
import Wrapper from "../Wrapper";
import Project from "../Project";
import projects from "../../projects.json";

function Projects() {
    return (
        <div className="back">
            <div className="title">
             <h2>Recent Projects</h2>
             </div>

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
        </div>
    );
}

export default Projects;
