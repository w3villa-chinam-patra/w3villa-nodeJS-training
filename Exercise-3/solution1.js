// 1.  Create an event emitter that emits a 'start' event and logs a message when triggered.

import EventEmitter from "node:events";

const eventEmitter = new EventEmitter();
console.log(eventEmitter);

eventEmitter.on("start", (param) => {
  console.log("start event fired 1", param);
});
eventEmitter.on("start", () => {
  console.log("start event fired 2");
});

eventEmitter.emit("start", "hello");
