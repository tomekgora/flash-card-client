import request from "superagent";

const baseUrl = "http://localhost:4000";

const FlashCardReceived = flashcard => ({
  type: "FLASHCARD_RECEIVED",
  payload: flashcard
});

const quizReceived = flashcards => ({
  type: "QUIZ_RECEIVED",
  payload: flashcards
});

export const getRandomFlashCard = () => dispatch => {
  request
    .get(`${baseUrl}/flashcard/random`)
    .then(res => {
      const action = FlashCardReceived(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const getQuiz = () => dispatch => {
  request
    .get(`${baseUrl}/flashcard`)
    .then(res => {
      const action = quizReceived(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
