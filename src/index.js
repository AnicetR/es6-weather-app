import HelloWorld from "components/HelloWorld";
import "main.css";

import eventBus from "eventBus";
import { getCurrentWeather } from "./api";
import config from "config";
import forecastView from "./views/forecast";
import weatherInfosState from "./states/weatherInfosState";

const main = async () => {
  if(new weatherInfosState().getData().data === null){
    getCurrentWeather()
  }
  //Automatic refresh every two hours
  setTimeout(() => getCurrentWeather(), config.updateEvery * 60 * 60 * 1000);
  //Automatic data refresh if city changes
  new eventBus().subscribe("city", getCurrentWeather);

  forecastView();
};

main().then(() => console.log("Started"));
