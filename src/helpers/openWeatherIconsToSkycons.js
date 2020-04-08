export default (iconId) => {
  let iconsTable = new Map();
  iconsTable.set("01d", "clear-day");
  iconsTable.set("02d", "partly-cloudy-day");
  iconsTable.set("03d", "cloudy");
  iconsTable.set("04d", "cloudy");
  iconsTable.set("09d", "sleet");
  iconsTable.set("10d", "showers-day");
  iconsTable.set("11d", "thunder-rain");
  iconsTable.set("13d", "snow");
  iconsTable.set("50d", "fog");

  return iconsTable.get(iconId);
};
