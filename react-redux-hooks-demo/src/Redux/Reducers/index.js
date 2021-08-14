import { combineReducers } from "redux";
import incrementReducer from "./increment";
const rootReducer = combineReducers({
  increment: incrementReducer,
});

export default rootReducer;
