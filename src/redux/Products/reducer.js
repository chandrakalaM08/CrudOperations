import {
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_GET_SUCCESS,
  PRODUCT_PATCH_SUCCESS,
  PRODUCT_POST_SUCCESS,
  PRODUCT_REQUEST,
} from "../actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PRODUCT_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: [...state.products, payload],
      };
    }
    case PRODUCT_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case PRODUCT_GET_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    case PRODUCT_PATCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case PRODUCT_DELETE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    default:
      return state;
  }
};
