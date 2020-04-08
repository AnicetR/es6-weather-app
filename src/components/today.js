import kelvinToCelcius from '../helpers/kelvinToCelcius';
import dayOfWeek from '../helpers/dayOfWeek';

export default (city, currentData, dayData) => {
    console.log(dayData.temp.min, currentData, dayData.temp.max);
  let template = `
        <div class="weather-grids">
            <h3 class="fri">${dayOfWeek(dayData.dt)}</h3>
            <h3>${city.toUpperCase()}</h3>
        </div>
        <div class="weather-grids weather-mdl">
            <canvas id="clear-day" width="70" height="70"></canvas>
        </div>
        <div class="weather-grids">
            <h4>Max ${kelvinToCelcius(dayData.temp.max)}°</h4>
            <h2>${kelvinToCelcius(currentData.temp)}°C</h2>
            <h4>Min ${kelvinToCelcius(dayData.temp.min)}°</h4>
        </div>
    `;

  return template;
};