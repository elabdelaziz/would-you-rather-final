import React, { useState } from "react";
import { connect } from "react-redux";
import ParentCard from "./ParentCard";
import { handleAnswer } from "../actions/questions";

const QuestionToBeAnswered = (props) => {
  const { question, authedUser, dispatch } = props;
  const qid = question.id;
  let [answer, changeSelection] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!answer) {
      return alert("Answer Required");
    }
    dispatch(handleAnswer({ authedUser, qid, answer }));
  };
  return (
    <div className="container">
      <ParentCard id={qid}>
        <div className="radio-container">
          <form
            onChange={(event) => changeSelection(event.target.value)}
            action="/action_page.php"
          >
            <div className="radio-wrappers">
              <input
                type="radio"
                id="option-one"
                name="answer"
                value="optionOne"
              />
              <label htmlFor="option-one">{question.optionOne.text}</label>
            </div>
            <div className="radio-wrappers">
              <input
                type="radio"
                id="option-two"
                name="answer"
                value="optionTwo"
              />
              <label htmlFor="option-two">{question.optionTwo.text}</label>
            </div>
            <button
              type="submit"
              onClick={(event) => handleSubmit(event)}
              className="view-question"
            >
              Submit
            </button>
          </form>
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
export default connect(mapStateToProps)(QuestionToBeAnswered);
