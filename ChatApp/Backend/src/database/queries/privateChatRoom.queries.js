export const CREATE_PRIVATE_CHAT_ROOM_TABLE = `
    CREATE TABLE IF NOT EXISTS private_chat_room (
    chat TEXT,
    texted_by TEXT,
    room_id TEXT
    )
`;

export const INSERT_CHAT_INTO_TABLE = `
    INSERT INTO private_chat_room VALUES (?,?,?)
`;

export const SELECT_CHATS_BY_ROOM_ID = `
    SELECT * FROM private_chat_room WHERE room_id = ?
`;
