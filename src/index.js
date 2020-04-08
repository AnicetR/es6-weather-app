import HelloWorld from 'components/HelloWorld';
import 'main.css';

import cityStateClass from 'states/cityState';
import weatherInfosState from 'states/weatherInfosState';

const main = async () => {
    const weatherState = new weatherInfosState();
    weatherState.setData('test', {date: "'test"});

    const cityState = new cityStateClass();
    cityState.setData('test');

    console.log(weatherState.getData());
    console.log(cityState.getData());
    
    HelloWorld();
}

main().then(() => console.log('Started'));