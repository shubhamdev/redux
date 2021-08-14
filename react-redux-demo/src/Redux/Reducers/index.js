import { combineReducers } from "redux";
import increment from "./increment";
import decrement from "./decrement";

const rootReducer = combineReducers({
  decrement: decrement,
  increment: increment,
});

export default rootReducer;
