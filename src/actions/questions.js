import { saveQuestionAnswer } from "../utils/api";
import { userAnswerQuestion } from "../actions/users";
import { addNewQuestion } from "../utils/api";
import { userAddedQuestion } from "../actions/users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const QUESTION_ANSWERED_QUESTION = "QUESTION_ANSWERED_QUESTION";
export const QUESTION_ADD_QUESTION = "QUESTION_ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: QUESTION_ADD_QUESTION,
    payload: { question },
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: QUESTION_ANSWERED_QUESTION,
    payload: { authedUser, qid, answer },
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText, author }) {
  return (dispatch) => {
    return addNewQuestion({ optionOneText, optionTwoText, author }).then(
      (question) => {
        dispatch(addQuestion(question));
        dispatch(userAddedQuestion({ authedUser: author, qid: question.id }));
      }
    );
  };
}

export function handleAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    return saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch(userAnswerQuestion({ authedUser, qid, answer }));
      dispatch(answerQuestion({ authedUser, qid, answer }));
    });
  };
}
