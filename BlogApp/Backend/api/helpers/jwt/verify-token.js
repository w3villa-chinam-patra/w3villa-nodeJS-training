const jwt = require("jsonwebtoken");

module.exports = {
  friendlyName: "Verify the JWT Token",

  description: "Verifies the JWT Token a returns the payload",

  inputs: {
    token: {
      type: "string",
      required: true,
    },
  },

  fn: async function (inputs) {
    return jwt.verify(inputs.token, sails.config.custom.jwtSecret);
  },
};
