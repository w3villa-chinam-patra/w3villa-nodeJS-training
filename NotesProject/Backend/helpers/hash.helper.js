const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

// takes password and returns the hashed password
const getHashedPassword = async (password) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return await bcrypt.hash(password, salt);
};

// compare the input password with the hashed password 
const passwordComparator = async (inputPassword, hashedPassword) => {
  return await bcrypt.compare(inputPassword, hashedPassword);
};

module.exports = {
  getHashedPassword,
  passwordComparator,
};
