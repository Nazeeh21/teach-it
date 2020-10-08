import appReducer from "./appReducer";
import authReducer from "./authReducer";
import profileReducer from './profileReducer'
const { combineReducers } = require("redux");

const rootReducer = combineReducers({ app: appReducer, auth: authReducer, profile: profileReducer });

export default rootReducer;
