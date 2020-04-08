import { baseState } from "./baseState";
import eventBus from "../eventBus";

export default class weatherInfosState extends baseState {
  constructor() {
    super("weatherInfos");
  }

  setData(cityName, weatherInfos) {
    new eventBus().publish("test", "test !");
    super.setState({
      cityName: cityName,
      infos: weatherInfos,
    });
  }

  getData() {
    return super.getState();
  }
}
