// Build a Node.js application utilizing multiple modules and npm packages.

import chalk from "chalk";
import { calculateFactorial } from "../solution1/factorial.mjs";

console.log(chalk.yellow("hello"));
console.log(chalk.redBright("world"));
console.log(chalk.italic(`Factorial of 5 is ${calculateFactorial(5)}`));
