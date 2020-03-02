const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_LOGGED_IN": {
      return action.payload;
    }
    default:
      return state;
  }
}
