import React from "react";

const UserAvatar = ({ onMessageScreen }) => {
  return (
    <div
      className={
        onMessageScreen
          ? "flex items-center gap-4 p-2 cursor-default border-b border-b-[#19362D]"
          : "flex items-center gap-4 mb-2 p-2 hover:bg-[#19362D] rounded-xl cursor-pointer"
      }
    >
      <div className="avatar avatar-online">
        <div class="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
        </div>
      </div>
      <div className="w-48">
        <h2 className="line-clamp-1">FullName</h2>
        <p className="line-clamp-1 text-xs">email@gmail.com</p>
      </div>
    </div>
  );
};

export default UserAvatar;
