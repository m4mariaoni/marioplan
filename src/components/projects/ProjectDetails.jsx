import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            quia et suscipit\nsuscipit recusandae consequuntur expedita et
            cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est
            autem sunt rem eveniet architecto
          </p>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by the Net Ninja</div>
            <div className="grey-text">3rd Sepember, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
