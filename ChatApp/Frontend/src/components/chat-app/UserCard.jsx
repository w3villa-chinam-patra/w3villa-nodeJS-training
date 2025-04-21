import { FaUser } from "react-icons/fa6";
import { useUser } from "../../contexts/UserContext";
import socket from "../../sockets/socket";
import { useOtherUser } from "../../contexts";

function UserCard({ id, name, setChatRoomId }) {
  const userId = useUser().user.id;
  const { setOtherUser, otherUser } = useOtherUser();

  const joinChatHandler = () => {
    const chatRoomId = [userId, id].sort().join("");
    setChatRoomId(chatRoomId);
    setOtherUser({ id, name });

    socket.emit("join-chat", chatRoomId);
  };

  return (
    <div
      onClick={() => joinChatHandler()}
      className={`${
        otherUser?.id !== id ? "bg-neutral-100" : "bg-neutral-200"
      } cursor-pointer p-2 rounded-lg mb-2 border border-neutral-300 flex gap-4 items-center`}
    >
      <div className="profile-picture bg-white p-2 rounded-full border border-neutral-300">
        <FaUser className="text-3xl text-neutral-700" />
      </div>
      <div className="name">{name}</div>
    </div>
  );
}

export default UserCard;
