import appReducer from './appReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import createServiceReducer from './createServiceReducer'
import viewProfileReducer from './viewProfileReducer'
import settingReducer from './settingReducer'
import chatReducer from './chatReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  profile: profileReducer,
  createService: createServiceReducer,
  viewProfile: viewProfileReducer,
  settings: settingReducer,
  chat: chatReducer,
})

export default rootReducer
