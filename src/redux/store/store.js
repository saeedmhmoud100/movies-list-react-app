import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { moviesReducer } from "../reducer/movieReducer";

export const store = createStore(
  moviesReducer,
  applyMiddleware(thunk)
  //   composeWithDevTools()
);
