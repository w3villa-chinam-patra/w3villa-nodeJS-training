const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

// generates token
const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

// verifies token
const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

module.exports = {
  generateToken,
  verifyToken,
};
