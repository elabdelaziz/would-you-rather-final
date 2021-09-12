import React from "react";
import { Redirect, Route } from "react-router-dom";
import {connect} from 'react-redux'

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const authedUser = restOfProps.authedUser;
  console.log(authedUser);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authedUser !== null || authedUser ? <Component {...props} /> : <Redirect to="/homelogin" />
      }
    />
  );
}

function mapStateToProps({authedUser}) {
    return {
        authedUser,
    }
}
export default connect(mapStateToProps)(ProtectedRoute);
