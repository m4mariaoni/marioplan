import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
const Navbar = (props) => {
  const { auth } = props;
  console.log("navv", auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  console.log("navid", links);
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log("nav", state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
