import { combineReducers } from 'redux'
import { SignUpReducer } from './SignUp/reducer'
import { todoReducer } from './TodoList/reducer'
export const rootReducer = combineReducers({ SignUpReducer, todoReducer })
