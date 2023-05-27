import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as AuthReducer } from "./Authentication/reducer";
import { reducer as ProductsReducer } from "./Products/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AuthReducer, ProductsReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
