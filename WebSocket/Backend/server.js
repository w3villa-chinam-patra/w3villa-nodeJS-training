import "./loadEnv.js";
import app from "./app.js";
import { createServer } from "node:http";
import { Server } from "socket.io";

const PORT = process.env.PORT;

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`A new Socket is connected with id: ${socket.id}`);

  socket.on("message-to-backend", (message) => {
    console.log(`Message received: ${message}`);
    io.emit("message-to-frontend", message);
  });

  socket.on("disconnect", () => {
    console.log(`Socket disconnected with id: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
