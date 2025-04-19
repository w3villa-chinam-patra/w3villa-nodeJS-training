import { useState } from "react";
import socket from "../../socket";

function TypeAndSendSection({ roomId, setMessages }) {
  const [message, setMessage] = useState("");

  const typeMessageHandler = (event) => {
    setMessage(event.target.value);
  };
  const handleEnterKeyDown = (event) => {
    if (event.key === "Enter") sendHandler();
  };
  const sendHandler = () => {
    // setMessages((prev) => [...prev, message]);
    socket.emit("message-to-room", { message, roomId });
    setMessage("");
  };

  return (
    <div className="flex-none flex bg-gray-200 p-2 m-2 rounded-full gap-2 border border-gray-400">
      <div className="input-text-field flex-1 flex items-center">
        <input
          className="w-full outline-none bg-gray-50 border border-gray-400 rounded-full p-2"
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
        className="send-message-button px-4 py-2 flex-none cursor-pointer bg-teal-600 border border-teal-800 rounded-full text-white"
      >
        Send
      </button>
    </div>
  );
}

export default TypeAndSendSection;
