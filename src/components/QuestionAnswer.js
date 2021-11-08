import React from "react";
import { connect } from "react-redux";
import ParentCard from "./ParentCard";
import ProgressBarr from "./ProgressBarr";

const QuestionAnswer = (props) => {
  const { question } = props;
  const totalVoteOptionOne = question.optionOne.votes.length;
  const totalVoteOptionTwo = question.optionTwo.votes.length;
  const totalVotes = totalVoteOptionOne + totalVoteOptionTwo;
  const optionOnePercentage =
    Math.round((totalVoteOptionOne / totalVotes) * 10000) / 100;
  const optionTwoPercentage =
    Math.round((totalVoteOptionTwo / totalVotes) * 10000) / 100;
  return (
    <div className="container">
      <ParentCard id={question.id}>
        <div className="all-answers-container">
          <div className="answers-options">
            <h4 className="">{question.optionOne.text}</h4>
            <ProgressBarr
              className="progress-bar"
              value={optionOnePercentage}
            />
            <p className="answers-stat">
              {optionOnePercentage}% ... {totalVoteOptionOne} out of {""}
              {totalVotes}
            </p>
          </div>
          <div className="answers-options">
            <h4 className="">{question.optionTwo.text}</h4>
            <ProgressBarr
              className="progress-bar"
              value={optionTwoPercentage}
            />
            <p className="answers-stat">
              {optionTwoPercentage}% ... {totalVoteOptionTwo} out of {""}
              {totalVotes}
            </p>
          </div>
        </div>
      </ParentCard>
    </div>
  );
};
function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(QuestionAnswer);
