import { useState } from "react";
import socket from "../../sockets/socket";
import { useUser } from "../../contexts/UserContext";

function TypeAndSendSection({ chatRoomId }) {
  const [message, setMessage] = useState("");
  const userId = useUser()?.user?.id;

  const typeMessageHandler = (event) => {
    setMessage(event.target.value);
  };
  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") sendHandler();
  };
  const sendHandler = () => {
    // setMessages((prev) => [...prev, message]);

    socket.emit("message-to-backend", { message, userId }, chatRoomId);
    setMessage("");
  };

  return (
    <div className="flex-none flex bg-neutral-200 p-1 my-2 rounded-full gap-2 border border-neutral-400">
      <div className="input-text-field flex-1 flex items-center">
        <input
          className="w-full outline-none bg-neutral-50 border border-gray-400 rounded-full px-2 py-1"
          value={message}
          onChange={typeMessageHandler}
          type="text"
          name="input-message"
          id="input-message"
          onKeyDown={handleEnterKeyDown}
        />
      </div>
      <button
        onClick={sendHandler}
        className="send-message-button px-4 py-1 flex-none cursor-pointer bg-teal-500 border border-teal-700 rounded-full text-white"
      >
        Send
      </button>
    </div>
  );
}

export default TypeAndSendSection;
