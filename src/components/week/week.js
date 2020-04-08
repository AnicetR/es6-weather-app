import nextDay from "./nextDay";
import dayOfWeek from "../../helpers/dayOfWeek";

export default (data) => {
    let template = `
    <ul>
        ${weekContent(data)}
    </ul>
    `;

    return template;
}

const weekContent = function(data){
    data = data.slice(1)
    console.log(data);
    let template = "";

    for (let i = 0; i < data.length; i++){
        template += `<li>${nextDay(data[i].dt, 'cloud', data[i].temp.max, data[i].temp.min)}</li>`;
    }

    return template;
    
}