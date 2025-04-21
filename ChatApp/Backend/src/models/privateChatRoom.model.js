import { getDb } from "../database/config.js";
import { CREATE_PRIVATE_CHAT_ROOM_TABLE } from "../database/queries/privateChatRoom.queries.js";

const createPrivateChatRoomTable = async () => {
  await getDb().exec(CREATE_PRIVATE_CHAT_ROOM_TABLE);
};

export default createPrivateChatRoomTable;
