import bcrypt from "bcrypt";
import { AppConstants } from "../constants/index.js";

// hash the password
export const getHashedPassword = async (password) => {
  return await bcrypt.hash(password, AppConstants.HASH.SALT_ROUNDS);
};

// compare the input password with the stored hashed password
export const isMatch = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};
