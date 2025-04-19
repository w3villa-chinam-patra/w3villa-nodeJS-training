import { getDb } from "../database/config.js";
import { CREATE_USER_TABLE } from "../database/queries/user.queries.js";

const createUserTable = async () => {
  await getDb().exec(CREATE_USER_TABLE);
};

export default createUserTable;
