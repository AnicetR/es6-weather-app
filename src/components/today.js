export default () => {
  let template = `
        <div class="weather-grids">
            <h3 class="fri">Friday </h3>
            <h3>Weather</h3>
        </div>
        <div class="weather-grids weather-mdl">
            <canvas id="clear-day" width="70" height="70"></canvas>
        </div>
        <div class="weather-grids">
            <h4>Max 27°</h4>
            <h2>21°C</h2>
            <h4>Min 10°</h4>
        </div>
    `;

  return template;
};
