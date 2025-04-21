import { useUser } from "../../contexts/UserContext";

function MessageSection({ messages }) {
  const userId = useUser()?.user?.id;
  return (
    <div className="flex-1 flex flex-col bg-teal-50 rounded-xl p-3 border border-teal-300 overflow-y-auto">
      {messages.map((messageObj, index) => (
        <div
          className={`text-white ${
            userId !== messageObj.userId
              ? "bg-teal-500 self-start rounded-tr-full"
              : "bg-gray-500 self-end rounded-tl-full"
          } py-1 px-6 m-0.5 rounded-b-full`}
          key={index}
        >
          {messageObj.message}
        </div>
      ))}
    </div>
  );
}

export default MessageSection;
