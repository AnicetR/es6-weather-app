//From https://github.com/AnicetR/Invaderz/blob/master/src/core/core.events.js
//Modified as singleton for this project

let instance = null;

class EventBus {
  constructor() {
    if (!instance) {
      instance = this;
    }
    this.topics = [];
    this.exists = this.topics.hasOwnProperty;
    return instance;
  }
  subscribe(topic, listener) {
    if (!this.exists.call(this.topics, topic)) this.topics[topic] = [];
    return this.topics[topic].push(listener);
  }

  publish(topic, data) {
    if (!this.exists.call(this.topics, topic)) return;

    this.topics[topic].forEach(function (item) {
      item(data !== undefined ? data : {});
    });
  }

  unsubscribe(topic, index) {
    this.topics[topic] = this.topics[topic].splice(index);
  }
}

export default EventBus;
