import axios from "axios";

export const getWeather = async (lat, lon) => {
  const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude: lat,
      longitude: lon,
      hourly: "temperature_2m,relative_humidity_2m,precipitation,visibility,windspeed_10m,pm10,pm2_5",
      daily: "temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max",
      current_weather: true,
      timezone: "auto"
    }
  });
  return res.data;
};

export const getHistory = async (lat, lon, start, end) => {
  const res = await axios.get("https://archive-api.open-meteo.com/v1/archive", {
    params: {
      latitude: lat,
      longitude: lon,
      start_date: start,
      end_date: end,
      daily: "temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,sunrise,sunset",
      timezone: "auto"
    }
  });
  return res.data;
};