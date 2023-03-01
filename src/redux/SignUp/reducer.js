import { SIGNUP } from './constant'

export const SignUpReducer = (state = [], action) => {
  switch (action.type) {
    case SIGNUP:
      return [...state, action.payload]
    default:
      return state
  }
}
