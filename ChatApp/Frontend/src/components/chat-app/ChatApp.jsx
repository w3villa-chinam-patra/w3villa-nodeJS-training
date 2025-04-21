import { useState, useEffect } from "react";
import MessageSection from "./MessageSection";
import TypeAndSendSection from "./TypeAndSendSection";
import UsersList from "./UsersList";
import socket from "../../sockets/socket";
import { useOtherUser } from "../../contexts";
import { PiChatsFill } from "react-icons/pi";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [chatRoomId, setChatRoomId] = useState();
  const otherUser = useOtherUser().otherUser;

  useEffect(() => {
    socket.on("message-to-frontend", (messagePayload) => {
      setMessages((prev) => [...prev, messagePayload]);
    });

    socket.on("previous-chats", (previousMessages) => {
      setMessages(
        previousMessages.map((message) => ({
          message: message.chat,
          userId: message.texted_by,
        }))
      );
    });

    return () => {
      socket.off("message-to-frontend");
      socket.off("previous-chats");
    };
  }, []);

  return (
    <div className="flex h-full">
      <div className="w-2/8">
        <UsersList setChatRoomId={setChatRoomId} />
      </div>
      <div className="m-2 flex flex-col w-6/8">
        {otherUser?.id ? (
          <>
            <MessageSection messages={messages} />
            <TypeAndSendSection chatRoomId={chatRoomId} />
          </>
        ) : (
          <div className="h-full flex justify-center items-center">
            <PiChatsFill className="text-teal-500/30 text-8xl" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatApp;
