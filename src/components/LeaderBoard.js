import React from "react";
import { connect } from "react-redux";
import AddQuestionButton from "./AddQuestionButton";

const LeaderBoard = ({ users }) => {
  return (
    <div className="container">
      <div className="card-container">
        {Object.keys(users)
          .map((id) => ({
            id: id,
            avatar: users[id].avatarURL,
            questionsMade: users[id].questions.length,
            questionsAnswered: Object.keys(users[id].answers).length,
            name: users[id].name,
            score:
              users[id].questions.length +
              Object.keys(users[id].answers).length,
          }))
          .sort((a, b) => b.score - a.score)
          .map((user) => (
            <div key={user.id} className="leader-card">
              <div>
                <span className="gradient-text">{user.name}</span>
              </div>
              <div className="sec-row">
                <img
                  className="main-img"
                  src={`${user.avatar}`}
                  alt={`${user.name} avatar`}
                />
                <div className="leader-stat">
                  <span>{`Score: ${user.score}`}</span>
                  <span>{`Questions added: ${user.questionsMade}`}</span>
                  <span>{`Questions answered: ${user.questionsAnswered}`}</span>
                </div>
              </div>
            </div>
          ))}
      </div>
      <AddQuestionButton />
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
