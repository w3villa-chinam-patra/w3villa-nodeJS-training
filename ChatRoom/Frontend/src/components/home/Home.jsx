import React from "react";
import { AppRoutes } from "../../constants";
import { useNavigate } from "react-router";

function Home() {
  const navigate = useNavigate();
  const createRoomLink = () => {
    const roomId = crypto.randomUUID();
    navigate(AppRoutes.ROOM_ROUTE + `/${roomId}`);
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="option-container flex flex-col gap-4 bg-gray-100 border border-gray-300 rounded-xl p-8">
        <button
          onClick={createRoomLink}
          className=" bg-fuchsia-500 border cursor-pointer border-fuchsia-600 text-white py-4 px-8 rounded-xl"
        >
          Join a Room
        </button>
      </div>
    </div>
  );
}

export default Home;
