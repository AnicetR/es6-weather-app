import HelloWorld from 'components/HelloWorld';
import 'main.css';

import cityStateClass from 'states/cityState';
import weatherInfosState from 'states/weatherInfosState';

import eventBus from 'eventBus';

const main = async () => {
    new eventBus().subscribe('test', (message) => console.log(message));

    const weatherState = new weatherInfosState();
    weatherState.setData('test', {date: "'test"});

    const cityState = new cityStateClass();
    cityState.setData('test');

    
    

    HelloWorld();
}

main().then(() => console.log('Started'));