const jwt = require("jsonwebtoken");

module.exports = {
  friendlyName: "Generate JWT Token",

  description: "Returns a jwt token having the given payload",

  inputs: {
    payload: {
      type: "json",
      required: true,
    },
  },

  fn: async function (inputs) {
    return jwt.sign(inputs.payload, sails.config.custom.jwtSecret);
  },
};
