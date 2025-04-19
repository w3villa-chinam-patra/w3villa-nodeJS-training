import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY;

// generates token
export const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY);
};

// verifies token
export const verifyToken = (token) => {
  return jwt.verify(token, SECRET_KEY);
};
