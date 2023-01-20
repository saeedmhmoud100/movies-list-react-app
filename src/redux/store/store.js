import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { moviesReducer } from "../reducer/movieReducer";

export const store = createStore(moviesReducer, composeWithDevTools());
