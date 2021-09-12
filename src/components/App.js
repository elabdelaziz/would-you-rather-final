import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import HomeLogin from "./HomeLogin";
import DashBoard from "./DashBoard";
import QuestionPage from "./QuestionPage";
import NewQuestion from "./NewQuestion";
import ProtectedRoute from "./ProtectedRoute";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <ProtectedRoute path="/" exact component={DashBoard} />
          <Route path="/homelogin" exact component={HomeLogin} />
          <Route path="/question/:id" exact component={QuestionPage} />
          <Route path="/new" exact component={NewQuestion} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
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
