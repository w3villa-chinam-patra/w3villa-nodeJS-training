module.exports = {
  friendlyName: "Find single user",

  description: "Find the user with the help of its id",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
  },

  exits: {
    success: { responseType: "ok" },
    notFound: { responseType: "notFound" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (inputs, exits) {
    try {
      const blog = await Blog.findOne({ id: inputs.id });
      if (!blog) {
        sails.log.error("Blog not found");
        return exits.notFound({ message: "Blog not found" });
      }

      return exits.success({
        message: "Blog fetched successfully",
        data: blog,
      });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Fails to fetch the blog" });
    }
  },
};
