import appReducer from "./appReducer";
import authReducer from "./authReducer";
import profileReducer from './profileReducer'
import createServiceReducer from './createServiceReducer'
const { combineReducers } = require("redux");

const rootReducer = combineReducers({ app: appReducer, auth: authReducer, profile: profileReducer, createService: createServiceReducer });

export default rootReducer;
