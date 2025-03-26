// Implement a function that accepts a callback and invokes it after a 1-second delay.

function afterOneSecond(callback) {
  setTimeout(callback, 1000);
}

afterOneSecond(() => console.log("Hello"));
