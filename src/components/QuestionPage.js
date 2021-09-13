import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import QuestionAnswer from "./QuestionAnswer";
import QuestionToBeAnswered from "./QuestionToBeAnswered";
import { clearAuthedUser } from "../actions/authedUser";

const QuestionPage = (props) => {
  const { questions, authedUser, users, match } = props;
  const id = match.params.id;
  const filteredQuestion = questions[id];

  if (!filteredQuestion) {
    props.dispatch(clearAuthedUser());
    return <Redirect to="/404" />;
  }

  const avatar = users[filteredQuestion.author].avatarURL;

  const questionHasAnswered =
    filteredQuestion.optionOne.votes.includes(authedUser) ||
    filteredQuestion.optionTwo.votes.includes(authedUser);

  return questionHasAnswered ? (
    <QuestionAnswer avatar={avatar} question={filteredQuestion} />
  ) : (
    <QuestionToBeAnswered avatar={avatar} question={filteredQuestion} />
  );
};

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions,
  users,
});

export default connect(mapStateToProps)(withRouter(QuestionPage));
