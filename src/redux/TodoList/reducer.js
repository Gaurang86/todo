import { ADDTASK, DELETETASK, EDITTASK, COLORCHANGE } from './constant'

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADDTASK:
      return action.payload
    case DELETETASK:
      return action.payload
    case EDITTASK:
      return action.payload
    case COLORCHANGE:
      return action.payload
    default:
      return state
  }
}
