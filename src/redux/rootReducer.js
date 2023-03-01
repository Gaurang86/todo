import { combineReducers } from 'redux'
import { SignUpReducer } from './SignUp/reducer'
import { aTask } from './TodoList/reducer'
export const rootReducer = combineReducers({ SignUpReducer, aTask })
