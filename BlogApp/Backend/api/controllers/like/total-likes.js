module.exports = {
  friendlyName: "Find the total likes",

  description: "Find the total like on a blog and returns it",

  inputs: {
    blogId: {
      type: "number",
      required: true,
    },
  },

  exits: {
    success: { responseType: "ok" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (inputs, exits) {
    try {
      const totalLikes = await Like.find({ blog: inputs.blogId });
      console.log(totalLikes.length);
      sails.log.info("Successfully fetched the total likes of the blog");
      return exits.success({
        message: "Successfully fetched the total likes of the blog",
        data: {
          totalLikes: totalLikes,
        },
      });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({
        message: "Failed to fetch the total likes of the blog",
      });
    }
  },
};
