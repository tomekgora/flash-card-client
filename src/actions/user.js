import request from "superagent";

const baseUrl = "http://localhost:4000";

const userLoggedIn = user => ({
  type: "USER_LOGGED_IN",
  payload: user
});

export const loginUser = user => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(user)
    .then(res => {
      const action = userLoggedIn(res.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const signUpUser = user => dispatch => {
  request
    .post(`${baseUrl}/sign-up`)
    .send(user)
    .then(res => {
      const action = userLoggedIn(res.body);
      dispatch(action);
    })
    .catch(console.error);
};
