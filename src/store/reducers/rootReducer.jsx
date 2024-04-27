import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  navigation: navigationReducer
});

export default rootReducer;
