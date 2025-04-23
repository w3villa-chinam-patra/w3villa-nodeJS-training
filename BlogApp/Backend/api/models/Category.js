module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true,
    },

    blogs: {
      collection: "blog",
      via: "category",
    },
  },
};
