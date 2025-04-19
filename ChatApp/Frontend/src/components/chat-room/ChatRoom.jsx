import { useState, useEffect } from "react";
import MessageSection from "../message-section/MessageSection";
import TypeAndSendSection from "../type-and-send-section/TypeAndSendSection";
import { useNavigate, useParams } from "react-router";
import socket from "../../socket";
import { AppRoutes } from "../../constants";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const { roomId } = useParams();

  useEffect(() => {
    socket.on("message-to-frontend", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message-to-frontend");
    };
  }, []);

  if (roomId.length) {
    socket.emit("join-room", roomId);
  } else {
    alert("Please enter valid room id");
    navigate(AppRoutes.HOME);
  }

  return (
    <div className="flex h-screen justify-center">
      <div className="app-container m-4 flex flex-col max-w-3xl w-full">
        <MessageSection messages={messages} />
        <TypeAndSendSection roomId={roomId} setMessages={setMessages} />
      </div>
    </div>
  );
}

export default ChatRoom;
