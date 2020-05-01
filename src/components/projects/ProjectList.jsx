import React from "react";
import ProjectSummary from "./ProjectSummary";
import { NavLink } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return (
            <NavLink to={"/project/" + project.id} key={project.id}>
              <ProjectSummary project={project}  />
            </NavLink>
          );
        })}
    </div>
  );
};

export default ProjectList;
