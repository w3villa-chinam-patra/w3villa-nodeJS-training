const { setDbUri } = require("./dbUri.js");
const read = require("./read.js");
const create = require("./create.js");
const update = require("./update.js");
const del = require("./delete.js");
const readOne = require("./readOne.js");

module.exports = { setDbUri, read, create, update, del, readOne };
