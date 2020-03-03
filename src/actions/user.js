import request from "superagent";

const baseUrl = "http://localhost:4000";

const userLoggedIn = user => ({
  type: "USER_LOGGED_IN",
  payload: user
});

const signupError = error => ({
  type: "SIGNUP_ERROR",
  payload: error
});

const loginError = error => ({
  type: "LOGIN_ERROR",
  payload: error
});

export const loginUser = user => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(user)
    .then(res => {
      const action = userLoggedIn(res.body);
      dispatch(action);
    })
    .catch(error => {
      const action = loginError(error);
      dispatch(action);
    });
};

export const signUpUser = user => dispatch => {
  request
    .post(`${baseUrl}/sign-up`)
    .send(user)
    .then(res => {
      console.log("Response to signUpUser: ", res);
      const action = userLoggedIn(res.body);
      dispatch(action);
    })
    .catch(error => {
      const action = signupError(error);
      dispatch(action);
    });
};
