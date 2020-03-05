import { combineReducers } from "redux";
import userReducer from "./user";
import errorReducer from "./error";
import flashcardReducer from "./flashcard";

export default combineReducers({
  user: userReducer,
  error: errorReducer,
  flashcard: flashcardReducer
});
