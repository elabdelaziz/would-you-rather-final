import {RECEIVE_USERS, USER_ANSWERED_QUESTION, USER_ADDED_QUESTION} from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case USER_ANSWERED_QUESTION :
            return {
              ...state,
              [action.payload.authedUser]: {
                ...state[action.payload.authedUser],
                answers: {
                  ...state[action.payload.authedUser].answers,
                  [action.payload.qid]: action.payload.answer,
                },
              },
            };
        case USER_ADDED_QUESTION :
          const {authedUser, qid} = action.payload
          return {
            ...state,
            [authedUser]: {
              ...state[authedUser],
              questions: [...state[authedUser].questions, qid]
            },
          }
        default :
        return state
    }
}