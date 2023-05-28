import {
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_GET_SUCCESS,
  PRODUCT_PATCH_SUCCESS,
  PRODUCT_POST_SUCCESS,
  PRODUCT_REQUEST,
} from "../actionTypes";

import axios from "axios";

// post request

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

// get request
export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  axios
    .get("http://localhost:8080/products", paramObj)
    .then((res) => {
      dispatch({ type: PRODUCT_GET_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

// patch request
export const patchProduct = (id, data) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  return axios
    .patch(`http://localhost:8080/products/${id}`, data)
    .then((res) => {
      dispatch({ type: PRODUCT_PATCH_SUCCESS });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};

// delete request
export const deleteProduct = (id) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });

  return axios
    .delete(`http://localhost:8080/products/${id}`)
    .then((res) => {
      dispatch({ type: PRODUCT_DELETE_SUCCESS });
    })
    .catch((err) => dispatch({ type: PRODUCT_FAILURE }));
};
