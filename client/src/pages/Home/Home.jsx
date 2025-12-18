import React from "react";
// import { useNavigate } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import MessageLayout from "../MessageScreen/MessageLayout";

const Home = () => {
  return (
    <div className="flex">
      <UserSidebar />
      <MessageLayout />
    </div>
  );
};

export default Home;
