import dayOfWeek from "../../helpers/dayOfWeek";
import kelvinToCelcius from "../../helpers/kelvinToCelcius";

export default (day, icon, tempMax, tempMin) => {
  let template = `
        <h4>${dayOfWeek(day)}</h4>
        <figure class="icons">
            <canvas id="${icon}" width="40" height="40"></canvas>
        </figure>
        <h5>${kelvinToCelcius(tempMax)}°C</h5>
        <h6>${kelvinToCelcius(tempMin)}°C</h6>
   `;
  return template;
};
