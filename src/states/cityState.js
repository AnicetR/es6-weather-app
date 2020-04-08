import { baseState } from "./baseState";

export default class cityState extends baseState {
  constructor(cityName) {
    super("city");
    this.cityName = cityName;
  }

  setData(cityName) {
    this.cityName = cityName;
    super.setState(this.cityName);
  }

  getData() {
    return super.getState();
  }
}
