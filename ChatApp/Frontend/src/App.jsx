import { useEffect, useState } from "react";
import "./App.css";
import { ChatRoom, Home } from "./components";
import socket from "./socket";
import { Route, Routes } from "react-router";
import { AppRoutes } from "./constants";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path={`${AppRoutes.ROOM_ROUTE}/:roomId`} element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
