module.exports = {
  friendlyName: "Like the blog",

  description: "Like the blog",

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
    const userId = this.req.me;
    try {
      const isLiked = await Like.findOne({
        blog: inputs.blogId,
        user: userId,
      });

      if (isLiked) {
        await Like.destroy({
          blog: inputs.blogId,
          user: userId,
        });

        sails.log.info("User removed the like from the blog successfully");
        return exits.success({
          message: "User removed the like from the blog successfully",
        });
      } else {
        await Like.create({
          blog: inputs.blogId,
          user: userId,
        });

        sails.log.info("User likes the blog successfully");
        return exits.success({ message: "User likes the blog successfully" });
      }
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Unable to like the blog" });
    }
  },
};
