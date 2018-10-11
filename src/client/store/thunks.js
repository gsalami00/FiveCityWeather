import axios from "axios";
import { GET_FIVE_CITIES, GET_ANY_CITY } from "./";
// const API_KEY = "3c4538a176b5e2d6e96913f96994e70b";

// const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET
// });

const getFiveCities = payload => ({
  type: GET_FIVE_CITIES,
  payload
});

const getAnyCity = payload => ({
  type: GET_ANY_CITY,
  city: payload.city,
  cityForecast: payload.cityForecast
});

export const gettingAnyCity = id => async dispatch => {
  try {
    const city = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${id}&units=imperial&APPID=${
        process.env.API_KEY
      }`
    );
    const forecast = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?id=${id}&units=imperial&APPID=${
        process.env.API_KEY
      }`
    );
    dispatch(getAnyCity({ city: city.data, cityForecast: forecast.data.list }));
  } catch (err) {
    console.error(err);
  }
};

export const gettingFiveCities = async dispatch => {
  try {
    console.log(process.env.API_KEY);
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/group?id=5128581,4684888,5368361,4930956,4372599&units=imperial&APPID=${
        process.env.API_KEY
      }`
    );
    dispatch(getFiveCities(data));
  } catch (err) {
    console.log(err);
  }
};
