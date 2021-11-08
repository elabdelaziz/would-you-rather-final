import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
import HomeLogin from "./HomeLogin";
import AddQuestionButton from "./AddQuestionButton";

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
      <div className="container center">
        <button
          onClick={() => this.handleUnansweredChoice(true)}
          className="q-filter-btn"
        >
          Unanswered Questions
        </button>
        <button
          onClick={() => this.handleUnansweredChoice(false)}
          className="q-filter-btn"
        >
          Answered Questions
        </button>
        <ul className="questions">
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
        <AddQuestionButton />
      </div>
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
