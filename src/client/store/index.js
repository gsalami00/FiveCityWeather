import { createStore, applyMiddleware } from "redux";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

export const GET_FIVE_CITIES = "GET_FIVE_CITIES";
export const GET_ANY_CITY = "GET_ANY_CITY";
export const GET_CITY_FORECAST = "GET_ANY_CITY";

let initialState = {
  cities: [],
  city: [],
  cityForecast: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIVE_CITIES:
      return {
        ...state,
        cities: [...state.cities, action.payload]
      };
    case GET_ANY_CITY:
      return {
        ...state,
        city: [action.city],
        cityForecast: [action.cityForecast]
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger)
);

export default store;
