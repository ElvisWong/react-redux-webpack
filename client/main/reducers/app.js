import {
  APP_SET_USER,
  APP_SET_IS_SNACK_BAR_OPEN,
  APP_PUSH_SNACK_BAR_MESSAGE, 
  APP_POP_SNACK_BAR_MESSAGE
} from '../actionTypes'

const initialState = {
  user: null,
  isSnackBarOpen: false,
  snackBarMessage: '',
  snackBarMessages: []
}

export default function reducer (state = initialState, action = {}) {

  switch (action.type) {
    case APP_SET_USER:
      return {...state, user: action.payload.user}
    case APP_PUSH_SNACK_BAR_MESSAGE:
      return {...state, snackBarMessages: [...state.snackBarMessages, action.payload.message]}
    case APP_POP_SNACK_BAR_MESSAGE:
      return {
        ...state,
        snackBarMessage: state.snackBarMessages[0],
        snackBarMessages: [...state.snackBarMessages.slice(1)]
      }
    case APP_SET_IS_SNACK_BAR_OPEN:
      return {...state, isSnackBarOpen: action.payload.isSnackBarOpen}
    default:
      return state
  }
}