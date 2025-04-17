function MessageSection({ messages }) {
  return (
    <div className="flex-1 flex flex-col items-start  bg-fuchsia-50 rounded-xl p-3 border border-fuchsia-300 overflow-y-auto">
      {messages.map((message, index) => (
        <div className="text-white bg-fuchsia-600 py-1 px-6 rounded-r-full m-0.5 rounded-bl-full" key={index}>{message} </div>
      ))}
    </div>
  );
}

export default MessageSection;
