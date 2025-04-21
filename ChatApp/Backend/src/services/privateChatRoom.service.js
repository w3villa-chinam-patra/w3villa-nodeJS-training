import { getDb } from "../database/config.js";
import {
  INSERT_CHAT_INTO_TABLE,
  SELECT_CHATS_BY_ROOM_ID,
} from "../database/queries/privateChatRoom.queries.js";

export const insertChatIntoTable = async ({ message, texted_by, roomId }) => {
  await getDb().run(INSERT_CHAT_INTO_TABLE, [message, texted_by, roomId]);
};

export const getAllMessageOfPrivateRoom = async (roomId) => {
  return await getDb().all(SELECT_CHATS_BY_ROOM_ID, roomId);
};
