import { combineReducers } from 'redux'
import { seatReducer } from './seatReducer'
import { userReducer } from './userReducer'
import { systemReducer } from './systemReducer'

export const rootReducer = combineReducers({
  // systemModule: systemReducer,
  seatModule: seatReducer,
  // userModule: userReducer
})
