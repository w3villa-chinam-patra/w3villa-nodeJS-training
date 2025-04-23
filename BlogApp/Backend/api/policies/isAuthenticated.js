module.exports = async function (req, res, proceed) {
  if (!req.headers.authorization) {
    sails.log.error("Missing authorization header");
    return res.serverError({ message: "Missing authorization header" });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.unauthorized({ message: "Authentication token is missing" });
  }

  try {
    const { id } = await sails.helpers.jwt.verifyToken.with({
      token,
    });

    const user = await User.find({ id });
    if (!user) {
      return res.notFound({ message: "User not found" });
    }

    req.me = id;
    return proceed();
  } catch (error) {
    sails.log.error(error);
    return res.unauthorized({ message: "Invalid token" });
  }
};
