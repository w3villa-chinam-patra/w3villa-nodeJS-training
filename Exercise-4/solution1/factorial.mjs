export const calculateFactorial = (num) =>
  num !== 1 ? calculateFactorial(num - 1) * num : 1;
