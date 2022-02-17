import { combineReducers } from "redux";
import UsersReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUserReducer,
});

export default rootReducer;
