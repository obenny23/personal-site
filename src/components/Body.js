import React from "react";
import ProjectData from "./data/projects.json";

const Body = () =>{

    return(
        <div className="projects">
            {ProjectData.map((project) =>
                <div className="project-card">
                    <h2>{project.title}</h2>
                    <ul>
                        {project.details.map((detail) => <li>{detail.detail}</li>)}
                    </ul>    
                </div>
            )}
           
        </div>
    )
};

export default Body;