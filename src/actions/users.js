import savaQuestionAnswer from '../utils/api'

export const RECEIVE_USERS = "RECEIVE_USERS";
export const USER_ANSWERED_QUESTION = "USER_ANSWERED_QUESTION";
export const USER_ADDED_QUESTION = 'USER_ADDED_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function userAnswerQuestion({ authedUser, qid, answer }) {
  return { type: USER_ANSWERED_QUESTION, payload: { answer, qid, authedUser } };
}

export function userAddedQuestion({authedUser, qid}) {
  return {
    type: USER_ADDED_QUESTION,
    payload: {authedUser, qid}
  }
}