import nextDay from "./nextDay";
import openWeatherIconsToSkycons from "../../helpers/openWeatherIconsToSkycons";

export default (data) => {
  let template = `
    <ul>
        ${weekContent(data)}
    </ul>
    `;

  return template;
};

const weekContent = function (data) {
  data = data.slice(1);
  let template = "";

  for (let i = 0; i < data.length; i++) {
    template += `<li>${nextDay(
      data[i].dt,
      openWeatherIconsToSkycons(data[i].weather[0].icon) + data[i].dt,
      data[i].temp.max,
      data[i].temp.min
    )}</li>`;
  }

  return template;
};
