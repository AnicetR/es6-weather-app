import { skycons } from "../vendor/skycons";

import todayComponent from "../components/today";
import weekComponent from "../components/week/week";
import weatherInfosState from "../states/weatherInfosState";
import EventBus from "../eventBus";

export default function forecastView() {
  const weatherState = new weatherInfosState();
  const weatherData = weatherState.getData().data;

  const template = `
    <div class="main-info">
        <div class="weather-top">	
            ${todayComponent(
              weatherData.cityName,
              weatherData.infos.current,
              weatherData.infos.daily[0]
            )}
            <div class="clear"> </div>
        </div>
        <div class="weather-bottom">	
            ${weekComponent(weatherData.infos.daily)}
            <div class="clear"> </div>
        </div>
    </div>
    <!--copyright-->
    <div class="copyright">
        <p>JS by : AnicetR</p>
        <p>Theme by : © 2016 Animated Weather Widget . All rights reserved | Template by <a href="http://w3layouts.com/" target="_blank">W3layouts</a></p>
    </div>
    `;

  document.body.innerHTML = template;

  //Load & init skycons from maxdow
  skycons();
  const icons = new Skycons({ monochrome: false });
  const iconListArray = iconList(weatherData.infos.daily);
  for (let i = iconListArray.length; i--; ) {
    for (let j = iconListArray[i].length; j--; ) {
      icons.set(iconListArray[i][j][0], iconListArray[i][j][1]);
    }
  }
  icons.play();

  //render on data update
  new EventBus().subscribe("weatherInfosUpdate", forecastView);
}

//Hack to have unique id for every icons to avoid double ids
const iconList = (daysForecast) => {
  const originalList = [
    "clear-day",
    "clear-night",
    "partly-cloudy-day",
    "partly-cloudy-night",
    "cloudy",
    "rain",
    "sleet",
    "snow",
    "wind",
    "fog",
    "showers-day",
  ];

  return daysForecast.map((dayData) =>
    originalList.map((iconName) => [iconName + dayData.dt, iconName])
  );
};
