import "./loadEnv.js";
import app from "./app.js";
import { createServer } from "node:http";
import { Server } from "socket.io";
import logger from "./src/utility/logger.js";
import { SuccessMessages } from "./src/constants/index.js";

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
  
});

server.listen(PORT, () => {
  logger.info(`Server started at http://localhost:${PORT}`);
});
