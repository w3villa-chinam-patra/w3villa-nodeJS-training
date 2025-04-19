export const CREATE_USER_TABLE = `
    CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password TEXT
)`;

export const CREATE_USER = `INSERT INTO users (id, name, username, password) VALUES (?,?,?,?)`;

export const SELECT_ALL_USERS = `SELECT * FROM users`;

export const SELECT_USER_WHERE_USERNAME =
  "SELECT * FROM users WHERE username = ?";

export const SELECT_USER_WHERE_ID = "SELECT * FROM users WHERE id = ?";
