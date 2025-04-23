module.exports = {
  friendlyName: "Create a user",

  description: "Create a user in the database",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
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
    notFound: { responseType: "notFound" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (input, exits) {
    try {
      const user = await User.create({
        name: input.name,
        email: input.email,
        password: input.password,
      }).fetch();

      sails.log.info("Register successfully");
      return exits.success({ message: "Register successfully", data: user });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Failed to register" });
    }
  },
};
