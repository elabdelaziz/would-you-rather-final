import {RECEIVE_QUESTIONS, QUESTION_ANSWERED_QUESTION, QUESTION_ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case QUESTION_ANSWERED_QUESTION:
      const { authedUser, qid, answer } = action.payload;
      const targetOption = state[qid][answer];
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...targetOption,
            votes: [...targetOption.votes, authedUser],
          },
        },
      };

    case QUESTION_ADD_QUESTION:
      const { question } = action.payload
      return {
        ...state,
        [question.id]: question
      }

    default:
      return state;
  }
}
