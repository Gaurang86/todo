import { ADDTASK } from './constant'

export const aTask = (state = [], action) => {
  switch (action.type) {
    case ADDTASK:
      return [...state, action.payload]
    default:
      return state
  }
}
