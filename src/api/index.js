import config from "../config";
import cityState from "../states/cityState";
import weatherInfosState from "../states/weatherInfosState";

async function apiCall(city, endpoint) {
  const cityReq = `q=${city}`;
  const apiKeyReq = `appid=${config.apiKey}`;

  const response = await fetch(
    `${config.apiUrl}${endpoint}?${cityReq}&${apiKeyReq}`
  );
  const json = await response.json();

  return json;
}

export async function getCurrentWeather() {
  const city = new cityState().getData().data ?? config.defaultCity;
  const weatherState = new weatherInfosState();

  if (
    city !== weatherState.data.cityName ||
    weatherState.lastUpdate + config.updateEvery * 60 * 60 * 1000 < Date.now()
  ) {
    const currentWeatherData = await apiCall(city, "weather");
    const dailyForecast = await apiCall(city, "forecast");

    weatherState.setData(city, {
      current: currentWeatherData,
      dailyForecast: dailyForecast,
    });
  }

  return weatherState.getData();
}
