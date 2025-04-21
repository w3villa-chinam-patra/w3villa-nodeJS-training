import "./loadEnv.js";
import app from "./app.js";
import { createServer } from "node:http";
import { Server } from "socket.io";
import logger from "./src/utility/logger.js";
import { SuccessMessages } from "./src/constants/index.js";
import {
  getAllMessageOfPrivateRoom,
  insertChatIntoTable,
} from "./src/services/privateChatRoom.service.js";

const PORT = process.env.PORT;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  logger.info(SuccessMessages.SOCKET.CONNECTED + socket.id);

  socket.on("join-chat", async (chatRoomId) => {
    socket.join(chatRoomId);
    const previousChats = await getAllMessageOfPrivateRoom(chatRoomId);
    socket.emit("previous-chats", previousChats);
  });

  socket.on("message-to-backend", (messagePayload, chatRoomId) => {
    insertChatIntoTable({
      message: messagePayload.message,
      texted_by: messagePayload.userId,
      roomId: chatRoomId,
    });
    io.to(chatRoomId).emit("message-to-frontend", messagePayload);
  });
});

server.listen(PORT, () => {
  logger.info(`Server started at http://localhost:${PORT}`);
});
