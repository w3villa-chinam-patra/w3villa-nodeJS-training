module.exports = {
  friendlyName: "Create a Blog",

  description: "Create a new blog post for the logged in user",

  inputs: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    image: {
      type: "string",
    },
    category: {
      type: "number",
      required: true,
    },
  },

  exits: {
    success: { responseType: "ok" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (inputs, exits) {
    const userId = this.req.me;
    try {
      await Blog.create({
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        category: inputs.category,
        user: userId,
      });

      sails.log.info("Blog created successfully");
      return exits.success({ message: "Blog created successfully" });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Failed to create blog" });
    }
  },
};
