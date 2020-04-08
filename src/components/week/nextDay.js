export default (day, icon, tempMax, tempMin) => {
  
  let template = `
        <h4>${day}</h4>
        <figure class="icons">
            <canvas id="${icon}" width="40" height="40"></canvas>
        </figure>
        <h5>${tempMax}°C</h5>
        <h6>${tempMin}°C</h6>
   `;
   return template;
};
