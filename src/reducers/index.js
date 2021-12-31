import { combineReducers } from "redux";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  games: userReducer,
});

export default rootReducer;
