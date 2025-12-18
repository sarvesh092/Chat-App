import React from "react";
import UserAvatar from "../Home/UserAvatar";
import Message from "./Message";
import { Send } from "lucide-react";

const MessageLayout = () => {
  return (
    <div className="w-full h-screen min-h-0 flex flex-col">
      <div>
        <UserAvatar onMessageScreen={true} />
      </div>
      <div className="p-4 flex-1 min-h-0 overflow-y-auto">
        <Message />
      </div>
      <div className="p-4 w-full flex gap-2">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full outline-none border border-gray-300 focus-within:border-2 focus-within:border-[#1FB854]"
        />
        <button className="btn btn-outline btn-primary">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default MessageLayout;
