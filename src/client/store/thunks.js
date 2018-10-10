import axios from "axios";
import {
  GET_NEW_YORK,
  GET_DALLAS,
  GET_LOS_ANGELES,
  GET_BOSTON,
  GET_WALDORF,
  LOADING,
  GET_FIVE_CITIES
} from "./";

const getFiveCities = payload => ({
  type: GET_FIVE_CITIES,
  payload
});

const getNewYork = payload => ({
  type: GET_NEW_YORK,
  payload
});

const getDallas = payload => ({
  type: GET_DALLAS,
  payload
});

const getLosAngeles = payload => ({
  type: GET_LOS_ANGELES,
  payload
});

const getBoston = payload => ({
  type: GET_BOSTON,
  payload
});

const getWaldorf = payload => ({
  type: GET_WALDORF,
  payload
});

export const gettingFiveCities = async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/group?id=5128581,4684888,5368361,4930956,4372599&units=imperial&APPID=3c4538a176b5e2d6e96913f96994e70b"
    );
    dispatch(getFiveCities(data));
  } catch (err) {
    console.log(err);
  }
};

export const gettingNewYork = async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=5128581&units=imperial&APPID=3c4538a176b5e2d6e96913f96994e70b"
    );
    dispatch(getNewYork(data));
  } catch (err) {
    console.log(err);
  }
};

export const gettingDallas = async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=4684888&units=imperial&APPID=3c4538a176b5e2d6e96913f96994e70b"
    );
    dispatch(getDallas(data));
  } catch (err) {
    console.log(err);
  }
};

export const gettingLosAngeles = async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=5368361&units=imperial&APPID=3c4538a176b5e2d6e96913f96994e70b"
    );
    dispatch(getLosAngeles(data));
  } catch (err) {
    console.log(err);
  }
};

export const gettingBoston = async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=4930956&units=imperial&APPID=3c4538a176b5e2d6e96913f96994e70b"
    );
    dispatch(getBoston(data));
  } catch (err) {
    console.log(err);
  }
};

export const gettingWaldorf = async dispatch => {
  try {
    const { data } = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=4372599&units=imperial&APPID=3c4538a176b5e2d6e96913f96994e70b"
    );
    dispatch(getWaldorf(data));
  } catch (err) {
    console.log(err);
  }
};
