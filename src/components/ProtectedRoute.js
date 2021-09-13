import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const authedUser = restOfProps.authedUser;

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authedUser !== null || authedUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/homelogin",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(ProtectedRoute);
