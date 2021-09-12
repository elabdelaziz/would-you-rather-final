import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import QuestionAnswer from './QuestionAnswer'
import QuestionToBeAnswered from './QuestionToBeAnswered'

const QuestionPage = (props) => {

    const { questions, authedUser, users, match, history } = props;
    const id = match.params.id;
    const filteredQuestion = questions[id];

    const avatar = users[filteredQuestion.author].avatarURL;

    const questionHasAnswered =
      filteredQuestion.optionOne.votes.includes(authedUser) ||
      filteredQuestion.optionTwo.votes.includes(authedUser);

    return questionHasAnswered ? (
      <QuestionAnswer avatar={avatar} question={filteredQuestion} />
    ) : (
      <QuestionToBeAnswered avatar={avatar} question={filteredQuestion} />
    );
    
}

const mapStateToProps = ({ authedUser, questions, users }) => ({
  authedUser,
  questions,
  users,
});

export default connect(mapStateToProps)(withRouter(QuestionPage));
