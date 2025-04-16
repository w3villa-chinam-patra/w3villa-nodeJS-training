import { useEffect, useState } from "react";
import "./App.css";
import { MessageSection, TypeAndSendSection } from "./components";
import socket from "./socket";

function App() {
  const [messages, setMessages] = useState([]);
  console.log(socket.id);
  
  useEffect(() => {
    socket.on("message-to-frontend", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      socket.off("message-to-frontend");
    };
  }, []);

  return (
    <div className="flex  h-screen py-20 px-4 justify-center">
      <div className="app-container flex flex-col max-w-2xl w-full">
        <MessageSection messages={messages} />
        <TypeAndSendSection setMessages={setMessages} />
      </div>
    </div>
  );
}

export default App;
