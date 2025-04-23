module.exports = {
  friendlyName: "Find all the categories",

  description: "Find all the categories and return it",

  exits: {
    success: { responseType: "ok" },
    notFound: { responseType: "notFound" },
    serverError: { responseType: "serverError" },
  },

  fn: async function (_, exits) {
    try {
      const categories = await Category.find();
      if (!categories) {
        sails.log.error("Failed to fetch categories");
        return exits.serverError({ message: "Failed to fetch categories" });
      }

      sails.log.info("All categories fetched successfully");
      return exits.success({
        message: "All categories fetched successfully",
        data: categories,
      });
    } catch (error) {
      sails.log.error(error);
      return exits.serverError({ message: "Failed to fetch categories" });
    }
  },
};
