import { combineReducers } from "redux";
import money_reducer from "./money_reducer";

const reducers = combineReducers({
  money: money_reducer,
});

export default reducers;
