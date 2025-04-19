import { io } from "socket";
import { SocketEvents } from "../constants/index.js";
import logger from "../utility/logger.js";




io.on(SocketEvents.CONNECTION, (socket) => {
    logger.info()
});
