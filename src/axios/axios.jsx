import axios from "axios";

const RAPID_API = process.env.REACT_APP_TRIP_API;
const WEATHER_API = process.env.REACT_APP_WEATHER_API;

// TYPE OF LOCATION TO SEARCH, BOUNDS OF MAP
// TRY CATCH AXIOS, PASS MAP BOUNDS AND TYPE OF LOCATION TO SEARCH
export const getPlacesData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          tr_longitude: ne.lng,
          tr_latitude: ne.lat,
          bl_latitude: sw.lat,
          bl_longitude: sw.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key": RAPID_API,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

// TRY CATCH AXIOS PASS LATITUDE AND LONGITUDE AS PARAMS TO RETRIEVE WEATHER LOCATION DATA
export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      "https://community-open-weather-map.p.rapidapi.com/find",
      {
        params: { lat: lat, lon: lng },
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": WEATHER_API,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
