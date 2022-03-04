import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ParentCard from "./ParentCard";

const Question = (props) => {
  const { question, id } = props;
  return (
    <ParentCard id={id}>
      <div className="selection-column">
        <p>{question.optionOne.text}...</p>
        <button className="view-question">
          <Link className="question-link" to={`/question/${id}`}>
            View Question
          </Link>
        </button>
      </div>
    </ParentCard>
  );
};
function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  // const author = question ? users[question.author] : null;

  return {
    question: question,
  };
}
export default connect(mapStateToProps)(Question);
