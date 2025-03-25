// Write a Node.js script that reads a file asynchronously and writes the content to a new
// file, ensuring each line is on a new line.

import fs from "fs/promises";

console.log("Program start");

fs.readFile("./input.txt", "utf8")
  .then((fileContent) => {
    console.log(fileContent);
    return fileContent;
  })
  .then((fileContent) => {
    fs.writeFile("./output.txt", fileContent);
  })
  .catch((error) => {
    console.log(error.message);
  });

console.log("Program end");
