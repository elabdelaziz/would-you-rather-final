import React, { Component, Fragment } from "react";
import { Container, Button, ButtonGroup } from "@material-ui/core/";
import { connect } from "react-redux";
import Question from "./Question";
import HomeLogin from "./HomeLogin";
import Nav from "./nav";

class DashBoard extends Component {
  state = {
    unansweredChoice: true,
  };

  handleUnansweredChoice = (value) => {
    this.setState({
      unansweredChoice: value,
    });
  };

  render() {
    const { questions, authedUser } = this.props;

    if (!authedUser) {
      return <HomeLogin />;
    }
    const qArray = Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    const answeredQuestions = qArray.filter(
      (questionId) =>
        questions[questionId].optionOne.votes.includes(authedUser) ||
        questions[questionId].optionTwo.votes.includes(authedUser)
    );

    const unAnsweredQuestions = qArray.filter(
      (questionId) =>
        !questions[questionId].optionOne.votes.includes(authedUser) &&
        !questions[questionId].optionTwo.votes.includes(authedUser)
    );
    return (
      <Fragment>
        <Nav />
        <Container style={{ border: "1px solid #dacbcb" }} maxWidth="sm">
          <ButtonGroup
            variant="contained"
            fullWidth
            style={{ position: "relative", top: "11px", marginTop: "10%" }}
            color="primary"
            aria-label="outlined primary button group"
          >
            <Button
              className={"mybtn"}
              onClick={() => this.handleUnansweredChoice(true)}
            >
              Unanswered Questions
            </Button>
            <Button onClick={() => this.handleUnansweredChoice(false)}>
              Answered Questions
            </Button>
          </ButtonGroup>
          <ul>
            {this.state.unansweredChoice === true
              ? unAnsweredQuestions.map((id) => (
                  <li key={id}>
                    <Question isUnanswered={true} id={id} />
                  </li>
                ))
              : answeredQuestions.map((id) => (
                  <li key={id}>
                    <Question isUnanswered={false} id={id} />
                  </li>
                ))}
          </ul>
        </Container>
      </Fragment>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    questions,
    users,
    authedUser,
  };
}
export default connect(mapStateToProps)(DashBoard);
