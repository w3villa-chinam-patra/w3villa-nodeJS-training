module.exports = {
  friendlyName: "Login",

  description: "Login the user using user's email and password",

  inputs: {
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: { responseType: "ok" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (inputs, exits) {
    try {
      const user = await User.findOne({
        email: inputs.email,
        password: inputs.password,
      });
      if (!user) {
        sails.log.error("Invalid credentials");
        return exits.serverError({ message: "Invalid credentials" });
      }

      const token = await sails.helpers.jwt.generateToken.with({
        payload: { id: user.id },
      });

      sails.log.info("Logged in successfully");
      return exits.success({
        message: "Logged in successfully",
        data: { user, token },
      });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Failed to login" });
    }
  },
};
