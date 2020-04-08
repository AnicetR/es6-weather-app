export class baseState{
    constructor(stateName){
        this.stateName = stateName;
        this.lastUpdateBasePath = ".lastUpdate";
        this.dataBasePath = ".data";
    }

    setState(data){
        window.localStorage.setItem(this.stateName+this.lastUpdateBasePath, Date.now());
        window.localStorage.setItem(this.stateName+this.dataBasePath, JSON.stringify(data));
    }

    getState(){
        return {
            lastUpdate: window.localStorage.getItem(this.stateName+this.lastUpdateBasePath),
            data: JSON.parse(window.localStorage.getItem(this.stateName+this.lastUpdateBasePath))
        }
    }
}