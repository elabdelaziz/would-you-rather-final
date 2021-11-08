import React from "react";
import { connect } from "react-redux";

const ParentCard = (props) => {
  const { question, author, children } = props;
  return (
    <div className="card-container">
      <div className="card">
        <div className="first-row">
          <h4>
            <span className="gradient-text">{author.name}</span> asks
          </h4>
          <h2>would you rather?</h2>
        </div>
        <div className="sec-row">
          <img
            className="main-img"
            src={`${author.avatarURL}`}
            alt={`${question.author} avatar`}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;

  return {
    question: question,
    author,
  };
}
export default connect(mapStateToProps)(ParentCard);
