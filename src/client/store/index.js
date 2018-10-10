import { createStore, combineReducers, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const GET_FIVE_CITIES = "GET_FIVE_CITIES";
export const GET_NEW_YORK = "GET_NEW_YORK";
export const GET_DALLAS = "GET_DALLAS";
export const GET_LOS_ANGELES = "GET_DALLAS";
export const GET_BOSTON = "GET_DALLAS";
export const GET_WALDORF = "GET_DALLAS";
export const LOADING = "LOADING";

let initialState = {
  loading: false,
  cities: [],
  newYork: [],
  dallas: [],
  losAngeles: [],
  boston: [],
  waldorf: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIVE_CITIES:
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload]
      };
    case GET_NEW_YORK:
      return {
        ...state,
        loading: false,
        newYork: [...state.newYork, action.payload]
      };
    case GET_DALLAS:
      return {
        ...state,
        loading: false,
        dallas: [...state.dallas, action.payload]
      };
    case GET_LOS_ANGELES:
      return {
        ...state,
        loading: false,
        losAngeles: [...state.losAngeles, action.payload]
      };
    case GET_BOSTON:
      return {
        ...state,
        loading: false,
        boston: [...state.boston, action.payload]
      };
    case GET_WALDORF:
      return {
        ...state,
        loading: false,
        waldorf: [...state.waldorf, action.payload]
      };
    case LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger)
);

export default store;
