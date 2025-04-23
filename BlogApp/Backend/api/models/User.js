module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true,
    },

    email: {
      type: "string",
      required: true,
      isEmail: true,
      unique: true,
    },

    password: {
      type: "string",
      required: true,
    },

    blogs: {
      collection: "blog",
      via: "user",
    },
  },
};
