// Create a function that takes two numbers and a callback, returning their sum.

function fun(a, b, callback) {
  return callback(a, b);
}

console.log(fun(5, 6, (a, b) => a + b));
