import config from "../config";
import cityState from "../states/cityState";
import weatherInfosState from "../states/weatherInfosState";
import EventBus from "../eventBus";

async function apiCall(city, endpoint) {
  let cityReq = "";
  if (typeof city === "string") {
    cityReq = `q=${city}`;
  } else {
    cityReq = `lat=${city.lat}&lon=${city.lon}`;
  }

  console.log(city);

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
    typeof weatherState.data === typeof undefined ||
    city !== weatherState.data.cityName
  ) {
    const currentWeatherData = await apiCall(city, "weather");
    const data = await apiCall(currentWeatherData.coord, "onecall");

    weatherState.setData(city, data);
  }

  return weatherState.getData();
}
