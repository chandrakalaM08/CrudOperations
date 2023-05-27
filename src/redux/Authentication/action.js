import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";
import axios from "axios";

export const login = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  axios({
    method: "post",
    url: "https://reqres.in/api/login",
    data: userData,
  })
    .then((res) => {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      console.log(res.data.token);
    })
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};
