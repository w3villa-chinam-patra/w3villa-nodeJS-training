module.exports = {
  friendlyName: "Create a comment",

  description: "Create a comment on a particular blog",

  inputs: {
    blogId: {
      type: "number",
      required: true,
    },
    content: {
      type: "string",
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
      await Comment.create({
        content: inputs.content,
        blog: inputs.blogId,
        user: userId,
      });

      sails.log.info("Comment added successfully");
      return exits.success({ message: "Comment added successfully" });
    } catch (error) {
      sails.log.error("Failed to add comment");
      return exits.serverError({ message: "Failed to add comment" });
    }
  },
};
