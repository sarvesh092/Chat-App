import React from "react";
import { Search, LogOut } from "lucide-react";
import UserAvatar from "./UserAvatar";

const UserSidebar = () => {
  return (
    <div className="max-w-[20em] w-full h-screen min-h-0 flex border-r-2 border-r-[#19362D] flex-col pt-2">
      <div className="text-2xl pl-3 font-bold text-[#1FB854]">Easy Chat</div>
      <div className="p-3">
        <label className="input outline-none border border-gray-300 focus-within:border-2 focus-within:border-[#1FB854]">
          <Search />
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="flex-1 min-h-0 overflow-y-auto p-1 bg-black rounded-xl mr-3 ml-3">
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
      </div>
      <div className="h-15 p-4 flex items-center justify-between mt-1 mb-1">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
          </div>
        </div>
        <button className="btn btn-soft btn-secondary btn-sm">
          <LogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserSidebar;
