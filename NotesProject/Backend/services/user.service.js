const { userModel } = require("../models/");

// fetch all users from the database
exports.getAllUsers = async () => {
  return await userModel.find();
};

// get user by given condition
exports.getUserByCondition = async (condition) => {
  console.log(condition);
  const val = await userModel.findOne(condition);
  return val;
};

// creates a new user in the database
exports.createUser = async (name, username, hashedPassword) => {
  return await userModel.create({ name, username, password: hashedPassword });
};

// delete user by id
exports.deleteUserById = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

exports.updateUserById = async (id, updatedDataObject) => {
  return await userModel.findOneAndUpdate({ _id: id }, updatedDataObject);
};
