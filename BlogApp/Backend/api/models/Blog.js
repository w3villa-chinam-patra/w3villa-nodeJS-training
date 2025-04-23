module.exports = {
  attributes: {
    title: {
      type: "string",
      required: true,
    },

    description: {
      type: "string",
      columnType: "text",
    },

    image: {
      type: "string",
    },

    user: {
      model: "user",
      required: true,
    },

    comments: {
      collection: "comment",
      via: "blog",
    },

    likes: {
      collection: "like",
      via: "blog",
    },

    category: {
      model: "category",
      required: true,
    },
  },
};
