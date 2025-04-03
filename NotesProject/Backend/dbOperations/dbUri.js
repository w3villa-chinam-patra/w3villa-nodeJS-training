const dbUri = () => {
  let dbUri;
  return {
    setDbUri: (url) => {
      dbUri = url;
    },
    getDbUri: () => dbUri,
  };
};

module.exports = dbUri();
