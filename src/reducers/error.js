const initialState = { login: null, signup: null };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGNUP_ERROR": {
      return {
        ...initialState,
        signup: action.payload.message
      };
    }
    case "LOGIN_ERROR": {
      return {
        ...initialState,
        login: action.payload.message
      };
    }
    case "USER_LOGGED_IN": {
      return {
        login: null,
        signup: null
      };
    }
    // case "CLEAR_ERROR": {
    //   return {
    //     login: null,
    //     signup: null
    //   };
    // }
    default:
      return state;
  }
}
