import appReducer from "./appReducer";
import authReducer from "./authReducer";
const { combineReducers } = require("redux");

const rootReducer = combineReducers({ app: appReducer, auth: authReducer });

export default rootReducer;
