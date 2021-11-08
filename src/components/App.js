import React, { Component, Fragment } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomeLogin from "./HomeLogin";
import DashBoard from "./DashBoard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import ProtectedRoute from "./ProtectedRoute";
import LeaderBoard from "./LeaderBoard";
import PageNotFound from "./PageNotFound";
import Nav from "./nav";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Fragment>
        {this.props.location.pathname !== "/homelogin" && <Nav />}
        <Switch>
          <Route path="/homelogin" exact component={HomeLogin} />
          <ProtectedRoute path="/" exact component={DashBoard} />
          <ProtectedRoute path="/question/:id" exact component={QuestionPage} />
          <ProtectedRoute path="/add" exact component={NewQuestion} />
          <ProtectedRoute path="/leaderboard" exact component={LeaderBoard} />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Fragment>
    );
  }
}
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default withRouter(connect(mapStateToProps)(App));
