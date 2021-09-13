import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <ProtectedRoute path="/" exact component={DashBoard} />
            <Route path="/homelogin" exact component={HomeLogin} />
            <ProtectedRoute
              path="/question/:id"
              exact
              component={QuestionPage}
            />
            <ProtectedRoute path="/new" exact component={NewQuestion} />
            <ProtectedRoute path="/leaderboard" exact component={LeaderBoard} />
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(App);
