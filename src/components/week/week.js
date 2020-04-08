import nextDay from "./nextDay";

export default (data) => {
    let template = `
    <ul>
        ${weekContent(data)}
    </ul>
    `;

    return template;
}

const weekContent = function(data){
    let template = "";

    for (let i = 0; i < 7; i++){
        template += `<li>${nextDay("WED", 'cloud', 10, -5)}</li>`;
    }

    return template;
    
}