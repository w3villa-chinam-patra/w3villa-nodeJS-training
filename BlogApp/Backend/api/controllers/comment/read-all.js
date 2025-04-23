module.exports = {
  friendlyName: "Read all the comments",

  description: "Fetch all the comments of the blog",

  inputs: {
    blogId: {
      type: "number",
    },
  },

  exits: {
    success: { responseType: "ok" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (inputs, exits) {
    try {
      const allComments = await Comment.find({ blog: inputs.blogId }).populate("user");
      if (!allComments) {
        sails.log.error("Failed to fetch all comments of the blog");
        return exits.serverError({
          message: "Failed to fetch all comments of the blog",
        });
      }

      sails.log.info("All comments of the blog are fetched successfully");
      return exits.success({
        message: "All comments of the blog are fetched successfully",
        data: allComments,
      });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({
        message: "Failed to fetch all comments of the blog",
      });
    }
  },
};
