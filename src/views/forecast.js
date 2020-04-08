import { skycons } from "../vendor/skycons";

import todayComponent from "../components/today";
import weekComponent from "../components/week/week";
import weatherInfosState from "../states/weatherInfosState";

export default function forecastView() {

    const weatherState = new weatherInfosState();

    

  const template = `
    <div class="main-info">
        <div class="weather-top">	
            ${todayComponent()}
            <div class="clear"> </div>
        </div>
        <div class="weather-bottom">	
            ${weekComponent([])}
            <div class="clear"> </div>
        </div>
    </div>
    <!--copyright-->
    <div class="copyright">
        <p>© 2016 Animated Weather Widget . All rights reserved | Template by <a href="http://w3layouts.com/" target="_blank">W3layouts</a></p>
    </div>
    `;

  document.body.innerHTML = template;

  //Load & init skycons from maxdow
  skycons();

  const icons = new Skycons({ monochrome: false }),
    list = [
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
    ];

  for (let i = list.length; i--; ) {
    icons.set(list[i], list[i]);
  }

  icons.play();
}
