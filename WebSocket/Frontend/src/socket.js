import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_SERVER_URL, {
  reconnection: true,
});

export default socket;
