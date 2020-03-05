const initialState = { flashcard: null, quiz: null };

export default function flashcardReducer(state = initialState, action) {
  switch (action.type) {
    case "FLASHCARD_RECEIVED": {
      return {
        ...state,
        flashcard: action.payload
      };
    }
    case "QUIZ_RECEIVED": {
      return {
        ...state,
        quiz: action.payload
      };
    }

    default:
      return state;
  }
}
