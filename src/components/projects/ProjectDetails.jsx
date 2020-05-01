import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  const { project, auth } = props;
  console.log("prodetails", project);
  console.log("proauthdetails", auth);
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">
              {project.title} - {id}
            </span>
            <p>{project.content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>
                {" "}
                Posted by{project.authorFirstName}
                {project.authorLastName}
              </div>
              <div className="grey-text">3rd Sepember, 2am</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <div className="container center">Loading...</div>;
};

const mapStateToProps = (state, ownProps) => {
  console.log("stateDetails", state);
  console.log("ownprops", ownProps);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
