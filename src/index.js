import HelloWorld from "components/HelloWorld";
import "main.css";

import cityStateClass from "states/cityState";
import weatherInfosState from "states/weatherInfosState";

import eventBus from "eventBus";

const main = async () => {
  HelloWorld();
};

main().then(() => console.log("Started"));
