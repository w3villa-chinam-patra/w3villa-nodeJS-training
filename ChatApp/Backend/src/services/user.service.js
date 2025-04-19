import { getDb } from "../database/config.js";
import {
  CREATE_USER,
  SELECT_ALL_USERS,
  SELECT_USER_WHERE_ID,
  SELECT_USER_WHERE_USERNAME,
} from "../database/queries/user.queries.js";
import { getUUID } from "../utility/index.js";

export const createUser = async (name, username, password) => {
  await getDb().run(CREATE_USER, [getUUID(), name, username, password]);
};

export const getAllUsers = async () => {
  return await getDb().all(SELECT_ALL_USERS);
};

export const getUserByUsername = async (username) => {
  return await getDb().get(SELECT_USER_WHERE_USERNAME, username);
};

export const getUserById = async (id) => {
  return await getDb().get(SELECT_USER_WHERE_ID, id);
};
