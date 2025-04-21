import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserCard from "./UserCard";
import { useUser } from "../../contexts/UserContext";

function UsersList({ setChatRoomId }) {
  const [usersList, setUsersList] = useState([]);
  const userId = useUser()?.user?.id;
  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:4000/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const { data } = await response.json();
          setUsersList(data);
        }
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);
  return (
    <div className="p-2 h-full overflow-y-auto">
      {usersList.map(({ id, name }) => {
        if (id !== userId)
          return (
            <UserCard
              key={id}
              id={id}
              name={name}
              setChatRoomId={setChatRoomId}
            />
          );
      })}
    </div>
  );
}

export default UsersList;
