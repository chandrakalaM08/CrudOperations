import {
  PRODUCT_FAILURE,
  PRODUCT_GET_SUCCESS,
  PRODUCT_POST_SUCCESS,
  PRODUCT_REQUEST,
} from "../actionTypes";

import axios from "axios";

export const postProduct = (newProduct) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios({
    method: "post",
    url: "http://localhost:8080/products",
    data: newProduct,
  })
    .then((res) => {
      dispatch({ type: PRODUCT_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      dispatch({ type: PRODUCT_GET_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};
