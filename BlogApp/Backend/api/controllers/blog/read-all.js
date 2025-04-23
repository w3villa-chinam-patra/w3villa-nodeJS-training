module.exports = {
  friendlyName: "Find all blogs",

  description: "It finds all the blogs from the database and returns it",

  exits: {
    success: { responseType: "ok" },
    notFound: { responseType: "notFound" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (_, exits) {
    try {
      const blogs = await Blog.find();
      if (!blogs) {
        sails.log.error("Failed to fetch blogs");
        return exits.serverError({ message: "Failed to fetch blogs" });
      }

      sails.log.info("All blogs fetched successfully");
      return exits.success({
        message: "All blogs fetched successfully",
        data: blogs,
      });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Failed to fetch blogs" });
    }
  },
};
