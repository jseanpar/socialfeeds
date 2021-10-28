import { combineReducers } from 'redux'

import feedsReducer from './feedsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
  feedsReducer,
  usersReducer
})