import { baseState } from "./baseState";

export default class weatherInfosState extends baseState {
  constructor() {
    super('weatherInfos');
  }

  setData(cityName, weatherInfos) {
    super.setState({
      cityName: cityName,
      infos: weatherInfos,
    });
  }

  getData() {
    return super.getState();
  }
}
